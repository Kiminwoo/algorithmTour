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

