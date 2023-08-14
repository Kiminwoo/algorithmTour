const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let answer = input[0].split('').map(Number).sort(function(a,b){return b - a}).join("");

console.log(answer)