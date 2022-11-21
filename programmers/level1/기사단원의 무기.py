def solution(number, limit, power):
  answer = 0

  for i in range(number+1):
    divisorItem = get_measure(i)
    if(divisorItem > limit):
      divisorItem = power

    answer += divisorItem

  return answer


def get_measure(n):
  n = int(n)
  measureCnt = 0

  for i in range(1, int(n**(1/2)) + 1):
    if (n % i == 0):
      measureCnt+=1
      if((i**2) != n):
        measureCnt += 1

  return measureCnt

solution(5,3,2)