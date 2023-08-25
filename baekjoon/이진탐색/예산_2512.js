// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input =[];
input[0] = "4";
input[1] = "120 110 140 150";
input[2] = "485";


// 지방의 수 (n)
let n = Number(input[0]);
// 각 지방의 예산 요청 
let arr = input[1].split(' ').map(Number);
// 총 예산 (M)
let m = Number(input[2]);

// 이진 탐색을 위한 시작점(start) 과 끝점(end) 설정
let start = 1;
let end = arr.reduce((a,b)=> Math.max(a,b));
let result = 0;

// 이진 탐색 수행 
while( start <= end){
    
    // 현재의 중간점(상환액)
    let mid = parseInt((start+end)/2);
    // 배정된 예산의 총액 계산
    let total = 0;
    
    // 각 지방에서 요청한 예산을 하나씩 확인
    for(x of arr){
        // 예산 배정
        total += Math.min(mid,x);
    }
    
    // 조건을 만족하였을 경우 , 상환액(최대화가 목표)을 증가
    if( total <= m){
        result = mid;
        start = mid + 1;
    } else {
        // 조건을 만족하지 못한다면 , 상환액 감소 
        end = mid-1;
    }
}

console.log(result);
