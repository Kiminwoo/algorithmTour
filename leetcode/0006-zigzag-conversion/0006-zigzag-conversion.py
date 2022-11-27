class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        
        resultList = [[] for _ in range(numRows)]
        result = ''

        i = 0 
        direction = True

        for x in s:
            resultList[i].append(x)
            if i == 0:  direction = True
            elif i == numRows - 1: direction = False
            
            if direction: i += 1
            else: i -= 1

        for i in range(numRows):
            result += ''.join(resultList[i])

        return result