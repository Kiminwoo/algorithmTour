const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const arr = input[1].split(' ').map(Number);
let waitTime = 0;
let resultArr = [];

// 오름 차순 정렬 
arr.sort(function(a,b){return a-b});

arr.map((x)=>{
    waitTime+= x;
    resultArr.push(waitTime);
})

console.log(resultArr.reduce((a,c)=>{ return a + c },0));