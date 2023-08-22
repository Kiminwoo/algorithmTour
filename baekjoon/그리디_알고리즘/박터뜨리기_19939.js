const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [n,k] = input[0].split(' ').map(Number);
let summary = 0;

for(let i=1; i < k+1; i++){
    summary += i;
}
// 공의 개수가 부족한 경우 
if( summary > n){
    console.log(-1);
} else { // 공의 개수가 충분한 경우 
    n -= summary;
    if(n % k == 0){
        // k개에 각각 1씩 더하기 
        console.log(k-1);
    } else {
        console.log(k);
    }
}
