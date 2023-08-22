const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [n,k] = input[0].split(' ').map(Number);
let resultArr = [];

for(let i=1 ; i <=n ; i++){
    resultArr.push(Number(input[i]));
}

// 내림차순으로 변경
resultArr.sort(function(a,b){return b-a});

let cnt = 0;

resultArr.forEach((x)=>{
    cnt += parseInt(k / x);
    k = k % x;
})

console.log(cnt);
