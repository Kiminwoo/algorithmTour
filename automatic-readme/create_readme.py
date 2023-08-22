import asyncio
import pickle
import sys
import os
import re

from const import MD_NAME, CONCAT_MD_HEADER, MD_HEADER, MD_TABLE, MD_DIFFICULTY, MD_S_CHARS , BASE_URL , API_URL
from crawler import Scraper, save_and_return_problems
from typing import List, Dict

from git import Repo


# 관리할 폴더
PLATFORMS = ["baekjoon"] 

# git 활용
GIT_REPO = Repo.init("")
GIT_BRANCH = GIT_REPO.active_branch
GIT_BASE_DIR = f"https://github.com/Kiminwoo/autoReadMe/blob/{GIT_REPO.head.commit}"

class FileInfo:
    def __init__(self, path: str, platform: str, dt: str, difficulty: str, *title: List[str]):
        """
        파일 정보 저장
        - path : baekjoon/backtracking/파일명.py
        - platform : baekjoon
        - dt : 최초 커밋 날짜
        - difficulty : 난이도 
        - title : 파일명 -> 실제 문제명 + 하이퍼링크
        """
        self.path = path
        self.platform = platform
        self.dt = dt
        self.difficulty = difficulty
        self.title = "".join(*title)

    @staticmethod
    def get_dt(path: str) -> str:
        """
        정렬 기준으로 사용할 최초 커밋 날짜 확인
        """
        dt = GIT_REPO.git.log("--follow", "--pretty=%cd","--date=format:%Y-%m-%d", path).split("\n")[-1]
        
        return dt

    @staticmethod
    def get_FileInfos_by_platform(platforms: List[str]) -> Dict[str, List['FileInfo']]:
        """"
        플랫폼 별 파일 정보 반환
        - {"baekjoon" : ["1001", "1002"] }
        """
        file_infos = {}
        currentPath = os.getcwd()

        for platform in platforms:
            file_infos[platform] = []
            for (root, dirs, files) in os.walk(os.path.join(currentPath, platform)):
                root = re.split(r"[/\\]", root[2:])  # "\" : 윈도우 운영체제
                for file in files:
                    if file[-2:] == "js":
                        path = "C:"+'/'.join([*root, file])[0:]
                        dt = FileInfo.get_dt(path)

                        # 로컬 path -> baekjoon/solved/backtracking/파일명.py 형태로 path 변경 
                        findIndex = path.find("baekjoon")
                        
                        path = path[findIndex:len(path)]

                        # 특수 문자로 인해 변경해서 저장한 파일명 다시 되돌리기
                        for s_char in MD_S_CHARS:
                            file = file.replace(s_char, MD_S_CHARS[s_char])
                        file_infos[platform].append(
                            FileInfo(path, root[6],  dt, "", file[:-3].split("_")[1:]))
        return file_infos

    @staticmethod
    def modify_fileInfo(file_infos: List['FileInfo'], problem_infos: Dict[str, List[str]]):
        """
        문제 이름 수정 , 문제 유형 , 난이도 ,  하이퍼링크 적용
        - 실제 문제 이름과 달리 파일명엔 공백이 없음 -> 크롤링해서 받아온 이름 활용
        - 불필요한 단어 제거 : [1차], [2021년 ~~] 등의 패턴 제거
        """
        title_dict = {problem_key.replace(
            " ", ""): problem_info[1] for problem_key, problem_info in problem_infos.items()}
        url_dict = {problem_key.replace(
            " ", ""): problem_info[2] for problem_key, problem_info in problem_infos.items()}
        tags_dict = {problem_key.replace(
            " ", ""): problem_info[3] for problem_key, problem_info in problem_infos.items()}
        difficulty_dict = {problem_key.replace(
            " ", ""): problem_info[4] for problem_key, problem_info in problem_infos.items()}
        
        for file_info in file_infos:
            # 불필요한 단어 제거
            if file_info.platform == "baekjoon":
                file_info.title = re.sub(r"[^\d]", "", file_info.title)
            
            # 문제 유형 추가 
            file_info.tags = tags_dict[f"{file_info.platform}/{file_info.title}"]    
            
            # 문제 난이도 추가 
            file_info.difficulty = difficulty_dict[f"{file_info.platform}/{file_info.title}"]    

            # 집합 객체 문자열로 변환
            file_info.tags = ' '.join(file_info.tags)

            file_info.title, url = re.sub(
                r"^\[.+]", "", title_dict[f"{file_info.platform}/{file_info.title}"]), url_dict[f"{file_info.platform}/{file_info.title}"]
            
            file_info.title = file_info.title.lstrip()
            # 하이퍼 링크 추가
            file_info.title = f"[{file_info.title}]({url})"


class READMECreator:
    """
    REAMD 파일 작성기
    """
    @staticmethod
    def get_lines(file_infos: List[FileInfo]) -> str:
        """
        문제 풀이 정보 저장
        """
        file_infos.sort(key=lambda x: (x.dt))
        md_lines = []

        for idx, file_info in enumerate(file_infos):
            
            for file_info_tags_idx in range(len(file_info.tags)):
                if(file_info_tags_idx % 2 != 0):
                    file_info.tags = file_info.tags.replace(" "," **\|** ")
                else :
                    file_info.tags = file_info.tags.replace(" ","<br>")

            md_lines.append(
                f"|{idx+1}|{file_info.dt}|{file_info.title}|[참조]({GIT_BASE_DIR}/{file_info.path})|{file_info.tags}|{MD_DIFFICULTY[file_info.difficulty]}|")
        
        # 마크다운 테이블 형식
        md_lines.append(MD_TABLE)
        
        # 가장 최근에 푼 문제가 가장 상위에 작성되도록
        return "\n".join(md_lines[::-1])  

    @staticmethod
    def write_readme(md_lines: str, platform: str):
        """
        플랫폼 별 README 파일 작성
        """
        
        currentPath = os.getcwd()

        print(currentPath)

        with open(f"{currentPath}/{platform}/{MD_NAME}", "w", encoding="UTF-8") as readme:
            readme.write(f"## :white_check_mark: {MD_HEADER[platform]}"+"\n")  # 헤더 작성
            readme.write(md_lines)

    @staticmethod
    def concat_readme(platforms: List[str]):
        """
        전체 README 파일 작성
        """
        currentPath = os.getcwd()

        print(currentPath)

        with open(f"{currentPath}/{MD_NAME}", "w", encoding="UTF-8") as main_readme:
            # 헤더 내용
            main_readme.writelines(CONCAT_MD_HEADER)
            # 목차 작성
            for platform in platforms:
                main_readme.write(
                    f"- [{platform.capitalize()}]("+BASE_URL+")" + "\n")
            main_readme.write("---" + "\n")
            
            # 각 플랫폼 별 README 파일 불러와서 병합하기
            for platform in platforms:
                with open(f"{currentPath}/{platform}/{MD_NAME}", "r", encoding="UTF-8") as readme:
                    main_readme.write(readme.read() + "\n")
                    main_readme.write("---" + "\n")


if __name__ == "__main__":
    # 윈도우 10 문제 해결
    if sys.platform == "win32":
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

    # 저장된 파일 정보 받아오기
    file_infos_platform = FileInfo.get_FileInfos_by_platform(PLATFORMS)
    
    print("File 정보 받아옴")
    problems = asyncio.run(Scraper.get_problems({platform: [
                           file_info.title for file_info in file_infos] for platform, file_infos in file_infos_platform.items()}))
    print("크롤링 완료")
    problem_infos = save_and_return_problems(problems)

    # 파일 잘 저장됐는지 확인
    with open("problem_info", "rb") as file: 
        problem_infos = pickle.load(file)
    FileInfo.modify_fileInfo(
        sum(file_infos_platform.values(), []), problem_infos)
    
    print("문제 이름 수정 완료")

    # README 작성 시작
    # 각 플랫폼 별 풀이 내역 작성하기
    for platform, file_infos in file_infos_platform.items():
        md_lines = READMECreator.get_lines(file_infos)
        READMECreator.write_readme(md_lines, platform)
        print(f"{platform} README 작성 완료")

    # 전체 풀이 내역 작성하기
    READMECreator.concat_readme(PLATFORMS)
    print("전체 README 작성 완료")
