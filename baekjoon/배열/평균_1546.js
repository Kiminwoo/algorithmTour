const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let data = input[1].split(' ').map(Number);
let maxScore = Math.max(...data);
let newScoreArr = data.map(x=> ( x/maxScore ) * 100);

console.log(`${newScoreArr.reduce((a,b)=> a+b) / n}`)