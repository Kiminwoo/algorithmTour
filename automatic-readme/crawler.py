from typing import List, Dict
from bs4 import BeautifulSoup
from const import BASE_URL , API_URL

import pickle
import requests
import aiohttp
import asyncio
import sys
import re


class Problem:

    """
    플랫폼별 문제 클래스
    """

    def __init__(self, id: str, title: str, url: str, platform: str, tags: [], difficulty:str):
        """
        - id : 문제 번호
        - title : 문제 이름
        - url : 사이트 내 문제 주소
        - platform : 플랫폼 이름
        - tags : 문제 유형
        - difficulty : 난이도
        """
        self.id = id
        self.title = title
        self.url = url
        self.platform = platform
        self.tags = tags
        self.difficulty = difficulty


class BaekjoonScraper:
    """
    백준 알고리즘 크롤링 클래스
    """

    @staticmethod
    async def fetch(session: aiohttp.ClientSession, url: str, headers: Dict[str, str]) -> str:
        """
        파라미터로 session , url , headers 포함하여 HTTP GET 요청 , 
        return :: json 객체로 반환
        """
        try:
            async with session.get(url, headers=headers) as response:
                if response.status == 200:
                    return await response.json()
        except aiohttp.ClientError:
            print(f"Failed to fetch{url}")

    async def get_problem(self, problem_id: str) -> Problem:
        """
        해당 ID를 사용하여 단일 문제에 대한 세부정보를 가져옴.
        return :: 문제를 나타내는 문제 객체 반환
        """
        api_url = f"{API_URL}/problem/show?problemId={problem_id}"
        headers = {"Content-Type": "application/json"}
        async with aiohttp.ClientSession() as session:
            response_json = await BaekjoonScraper.fetch(session, api_url, headers)

            # 파일 정보 확인

            # 문제 이름
            problem_title = response_json['titleKo']
            
            # 문제 태그 객체
            problem_aliases_tags = [ i for i in response_json['tags'] ]
            
            # 중복 없는 문제 태그
            problem_tags = set()

            for i in problem_aliases_tags:
                for j in i['displayNames']:
                    if j['language'] == 'ko':
                        problem_tags.add(j['name'].replace(" ",""))

            # 사이트 내 문제 주소
            problem_url = f"{BASE_URL}/problem/{problem_id}"

            # 문제 난이도
            problem_difficulty = response_json['level']

            return Problem(problem_id, problem_title, problem_url, "baekjoon", problem_tags,problem_difficulty)

    async def get_problems(self, problem_ids: List[str]) -> List[Problem]:
        """
        해당 ID를 사용하여 여러 문제에 대한 세부정보를 가져옴.
        return :: 문제를 나타내는 문제 객체 반환
        """
        tasks = [self.get_problem(re.sub(r"[^\d]", "", id))
                 for id in problem_ids]
        return await asyncio.gather(*tasks)


class ASyncScraper:
    """
    비동기 방식의 웹 스크래퍼
    """
    lst = {"baekjoon": BaekjoonScraper}

    def __init__(self, platforms):
        self.scraper = {platform: ASyncScraper.lst[platform](
        ) for platform in platforms if platform in ASyncScraper.lst}

    async def get_problems(self, problem_infos):
        tasks = [scraper.get_problems(problem_infos[platform])
                 for platform, scraper in self.scraper.items()]
        return await asyncio.gather(*tasks)


class Scraper:
    """
    웹 스크래퍼
    """
    @staticmethod
    async def get_problems(problem_infos: Dict[str, List[str]]) -> List[Problem]:

        # 크롤러 생성
        async_scraper = ASyncScraper(tuple(problem_infos.keys()))

        # 문제 정보 저장
        problems = []

        if async_scraper.scraper:
            problems.extend(await async_scraper.get_problems(problem_infos))

        # 1차원으로 변경
        problems = sum(problems, [])
        
        return problems


def save_and_return_problems(problems: List[Problem]) -> Dict[str, List[str]]:
    """
    문제의 고유 정보 저장
    - problem_infos : {"baekjoon/1000" : [문제 이름, url]}
    """
    problem_infos = {}
    for problem in problems:
        problem_key = f"{problem.platform}/{problem.title}" if problem.platform != "baekjoon" else f"{problem.platform}/{problem.id}"
        problem_infos[problem_key] = [problem.id, problem.title, problem.url,problem.tags,problem.difficulty]
    with open("problem_info", "wb") as file:
        pickle.dump(problem_infos, file)
    return problem_infos


def upsert_problems(problems: List[Problem]):
    """
    문제의 고유 정보 업데이트
    """
    # 새로 추가
    with open("problem_info", "rb") as file:
        problem_infos = pickle.load(file)
        for problem in problems:
            problem_key = f"{problem.platform}/{problem.title}" if problem.platform != "baekjoon" else f"{problem.platform}/{problem.id}"
            problem_infos[problem_key] = [
                problem.id, problem.title, problem.url]
            problem_infos.update(
                {problem_key: [problem.id, problem.title, problem.url]})
    # 저장
    with open("problem_info", "wb") as file:
        pickle.dump(problem_infos, file)


if __name__ == "__main__":
    # Windows의 aiohttp 오류 방지
    if sys.platform == "win32":
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    problems = asyncio.run(Scraper.get_problems(
        {"baekjoon": ["1152","2675","2908","11720","16953","11399","11047","19939","2839","1789","1946","1541","13305","11509","9000","1003","17609","1931","1000","2739","2438","1081","3052","2562","10818","1546","4344","1300","1181","2752","2751","11650","11651","9498","2884","2525","2480","2805","2512","1654"]}))
    save_and_return_problems(problems)
