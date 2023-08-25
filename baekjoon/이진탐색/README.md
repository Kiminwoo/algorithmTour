![js](https://skillicons.dev/icons?i=js&perline=3) 

## 순차 탐색 vs  이진 탐색


# 순차 탐색 
- 아래의 리스트에서 값이 12인 원소의 위치를 찾고하 한다. 어떻게 찾을 수 있을까 ?
- 순차 탐색 : 리스트 안에 있는 특정한 데이터를 찾기 위해 **앞에서부터 하나씩 확인한다.**

![이진탐색_1](https://github.com/Kiminwoo/algorithmTour/assets/33905149/7f95c29e-1274-4e06-bb7d-0a0fb7b47efe)

- 탐색을 위한 시간 복잡도 O(N)

<hr>

# 이진 탐색
- 이진 탐색 : 정렬되어 있는 리스트에서 **탐색 범위를 절반씩 좁혀가며 데이터를 탐색한다.**
- 탐색을 위한 시간 복잡도 : O(logN)

![이진탐색_2](https://github.com/Kiminwoo/algorithmTour/assets/33905149/ddb2b4b7-4645-4337-92d8-d6da1186dc97)

- 사전 조건 : 정렬이 되어 있다는 조건
- 동작 방식 : 이진 탐색을 수행할 때는 시작점(left) 와 끝점(end)을 기준으로 **탐색 범위를 명시**한다.

- 이진 탐색의 시간 복잡도 : 각 단계마다 탐색 범위를 2로 나누는 것으로 이해할 수 있다 , 이상적인 경우 매 단계마다 범위가 반으로 감소하므로 , **로그(log) 복잡도**를 가진다.

- ex ) **매우 넓은(억 단위 이상) 탐색 범위** 에서 최적의 해를 찾아야 하는 경우 , 데이터를 정렬한 뒤에 **다수의 쿼리**를 날려야 하는 경우

<hr> 

### 이진 탐색 구현 (재귀 함수)

```js

/**
 * 이진 탐색 구현 ( 재귀 함수 ) 
 * @param {array} arr - 정렬이 된 배열 
 * @param {number} target - 찾고자 하는 값
 * @param {number} start - 시작 위치 주소 
 * @param {number} end - 끝 위치 주소
 */
function binarySearch(arr, target, start, end){

    if(start > end){
        return -1
    }

    let mid = parseInt((start + end) /2);

    // 찾은 경우 중간점 인덱스 반환
    if(arr[mid] == target){
        return mid;
    } else if (arr[mid] > target){
        // 중간점의 값보다 찾고자 하는 값이 작은 경우 왼쪽에서 확인
        return binarySearch(arr,target,start,mid-1);
    } else {
        // 중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽에서 확인
        return binarySearch(arr,target,mid+1,end);
    }
}

// n (원소의 개수) 와 target(찾고자 하는 값)
let n = 10;
let target = 7;
arr = [1,3,5,7,9,11,13,15,17,19];

// 이진 탐색 수행 결과 출력
let result = binarySearch(arr,target,0,n-1);
if(result == -1){
    console.log("원소가 존재하지 않습니다.");
} else {
    console.log(`${result + 1} 번째 원소입니다.`);
}


```

<hr> 

### 이진 탐색 구현 (반복문)

```js

/**
 * 이진 탐색 구현 ( 반복분 ) 
 * @param {array} arr - 정렬이 된 배열 
 * @param {number} target - 찾고자 하는 값
 * @param {number} start - 시작 위치 주소 
 * @param {number} end - 끝 위치 주소
 */
function binarySearch(arr, target, start, end){

    while(start <= end){
        let mid = parseInt((start+end)/2);

        // 찾은 경우 중간점 인덱스 반환 
        if(arr[mid] == target){
            return mid;
        } else if (arr[mid] > target){
            // 중간점의 값보다 찾고자 하는 값이 작은 경우 왼쪽 확인
            end = mid-1;
        } else {
            // 중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
            start = mid +1;
        }
    }
    
    return -1;
}

// n (원소의 개수) 와 target(찾고자 하는 값)
let n = 10;
let target = 7;
arr = [1,3,5,7,9,11,13,15,17,19];

// 이진 탐색 수행 결과 출력
let result = binarySearch(arr,target,0,n-1);
if(result == -1){
    console.log("원소가 존재하지 않습니다.");
} else {
    console.log(`${result + 1} 번째 원소입니다.`);
}


```

<hr>

# 정렬된 배열에서 특정 원소의 개수 구하기

- lowerBound(arr,x) : 정렬된 순서를 유지하면 배열 arr에 x를 넣을 가장 왼쪽 인덱스를 반환
- upperBound(arr,x) : 정렬된 순서를 유지하면서 배열 arr에 x를 넣을 가장 오른쪽 인덱스를 반환

![하한선과_상한선_함수](https://github.com/Kiminwoo/algorithmTour/assets/33905149/506ad5af-8a11-49ea-905d-4fa80f42d66b)


### 하한선 함수

```js

/**
 * 하한선 함수 구현 ( 반복분 ) 
 * @param {array} arr - 정렬이 된 배열 
 * @param {number} target - 찾고자 하는 값
 * @param {number} start - 시작 위치 주소 
 * @param {number} end - 끝 위치 주소
 */
function lowerBound(arr, target, start, end){

    // 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
    while(start < end){
        let mid = parseInt((start+end)/2);
        if(arr[mid] >= target){
            
            // 최대한 왼쪽으로 이동
            end = mid;

        } else {
            start = mid + 1;
        }
    }

    return end;
}



```


### 상한선 함수

```js

/**
 * 상한선 함수 구현 ( 반복분 ) 
 * @param {array} arr - 정렬이 된 배열 
 * @param {number} target - 찾고자 하는 값
 * @param {number} start - 시작 위치 주소 
 * @param {number} end - 끝 위치 주소
 */
function upperBound(arr, target, start, end){

    // 정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스 반환
    while(start < end){
        let mid = parseInt((start+end)/2);
        if(arr[mid] > target){

            end = mid;

        } else {
            // 최대한 오른쪽으로 이동
            start = mid + 1;
        }
    }

    return end;
}



```


### countByRange() : 정렬된 배열에서 값이 특정 범위에 속하는 원소의 개수를 계산하는 함수

```js

/**
 * 정렬된 배열에서 값이 특정 범위에 속하는 원소의 개수를 계산하는 함수 ( lowerBound 함수 + uppperBound 함수 ) 
 * @param {array} arr - 정렬이 된 배열 
 * @param {number} target - 찾고자 하는 값
 * @param {number} start - 시작 위치 주소 
 * @param {number} end - 끝 위치 주소
 */
function countByRange(arr, leftValue, rightValue){

    let rightIndex = upperBound(arr, rightValue, 0, arr.length);
    let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
    return rightIndex - leftIndex;
}

// 배열 선언
let arr = [1,2,3,3,3,3,4,4,8,9];

// 값이 4인 데이터 개수 출력
console.log(countByRange(arr, 4,4));

// 값이 [-1,3] 범위에 있는 데이터 개수 출력
console.log(countByRange(arr,-1,3));

```

<hr>

# 파라메트릭 서치 ( parametric search ) 란 ? 

- **최적화 문제를 결정 문제('예' 혹은 '아니요')로 바꾸어 해결하는 기법** 이다.
- ex ) 특정한 조건을 만족하는 가장 알맞은 값을 빠르게 찾는 최적화 문제

- 이진 탐색 조건 : 변경할(최적화할) 값 x에 대하여 f(x)가 단조 증가 혹은 단조 감소
- 단조 증가 함수 : x <= y 이면 f(x) <= f(y) 인 경우
- 일반적으로 조건 ( constraint ) 은 f(x)에 대하여 정의된다.

![파라메트릭_서치_함수](https://github.com/Kiminwoo/algorithmTour/assets/33905149/87eccdb8-0e16-4bed-b933-b4d3ffa42ea2)

  
