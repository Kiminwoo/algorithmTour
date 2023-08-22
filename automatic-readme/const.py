# README 작성 관련 변수 정보 저장
MD_NAME = "README.md"
MD_HEADER = {
    "baekjoon": "Baekjoon 문제",
}
CONCAT_MD_HEADER = """\
### :airplane: 알고리즘 투어
"""
MD_TABLE = """\
| \# | 날짜 | 문제 | 풀이 | 문제 유형 | 난이도|
| :----: | :----: |:------: | :-----: | :-----------------: | :---: |\
"""
MD_DIFFICULTY = {
    # Baekjoon
    1: "![티어](/automatic-readme/src/1.svg)",
    2: "![티어](/automatic-readme/src/2.svg)",
    3: "![티어](/automatic-readme/src/3.svg)",
    4: "![티어](/automatic-readme/src/4.svg)",
    5: "![티어](/automatic-readme/src/5.svg)",
    6: "![티어](/automatic-readme/src/6.svg)",
    7: "![티어](/automatic-readme/src/7.svg)",
    8: "![티어](/automatic-readme/src/8.svg)",
    9: "![티어](/automatic-readme/src/9.svg)",
    10: "![티어](/automatic-readme/src/10.svg)",
    11: "![티어](/automatic-readme/src/11.svg)",
    12: "![티어](/automatic-readme/src/12.svg)",
    13: "![티어](/automatic-readme/src/13.svg)",
    14: "![티어](/automatic-readme/src/14.svg)",
    15: "![티어](/automatic-readme/src/15.svg)",
    16: "![티어](/automatic-readme/src/16.svg)",
    17: "![티어](/automatic-readme/src/17.svg)",
    18: "![티어](/automatic-readme/src/18.svg)",
    19: "![티어](/automatic-readme/src/19.svg)",
    20: "![티어](/automatic-readme/src/20.svg)",
    21: "![티어](/automatic-readme/src/21.svg)",
    22: "![티어](/automatic-readme/src/22.svg)",
    23: "![티어](/automatic-readme/src/23.svg)",
    24: "![티어](/automatic-readme/src/24.svg)",
    25: "![티어](/automatic-readme/src/25.svg)",
    26: "![티어](/automatic-readme/src/26.svg)",
    27: "![티어](/automatic-readme/src/27.svg)",
    28: "![티어](/automatic-readme/src/28.svg)",
    29: "![티어](/automatic-readme/src/29.svg)",
    30: "![티어](/automatic-readme/src/30.svg)",
}
# 파일명 사용 불가로 사용할 수 없는 문자들
MD_S_CHARS = {
    "＼": "\\",
    "／": "/",
    "：": ":",
    "＊": "*",
    "？": "?",
    "＂": '"',
    "＜": "<",
    "＞": ">",
    "｜": "|"
}

# 백준 url
BASE_URL = "https://www.acmicpc.net"

# solved url
API_URL = "https://solved.ac/api/v3"
