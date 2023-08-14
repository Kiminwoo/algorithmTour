const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let loop = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let minValue = arr.reduce((a,b)=>Math.min(a,b));
let maxValue = arr.reduce((a,b)=>Math.max(a,b));

console.log(`${minValue} ${maxValue}`)