const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// n : 나무의 수 , m : 집에 가져갈려는 나무의 길이 
let [n,m] = input[0].split(' ').map(Number);

// 나무들의 높이's
let arr = input[1].split(' ').map(Number);
let start = 1;
let end = arr.reduce((a,b)=> Math.max(a,b));
let result = 0;

while( start <= end ){
    // 현재의 중간점 (높이)
    let mid = parseInt((start+end)/2);
    // mid 로 잘았을 때 얻을 수 있는 나무의 양 계산
    let total = 0;
    
    for(x of arr){
        if( x > mid){
            total += x - mid
        }
    }
    
    // 나무의 양이 부족한 경우 더 많이 자르기 (높이 줄이기)
    if( total < m ){
        end = mid - 1 
    } else {
        // 나무의 양이 충분한 경우 덜 자르기 (높이 키우기)
        // 최대한 덜 잘랐을 때가 정답 
        result = mid;
        start = mid +1;
    }
}

console.log(result);
