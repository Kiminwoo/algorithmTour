const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// 중복을 허용하지 않는 집합 객체 사용
let arr = new Set();
let data = input.map(x=>Number(x));

for(let i=0; i < 10 ; i++){
    arr.add(data[i] % 42);
}


console.log([...arr].length);
