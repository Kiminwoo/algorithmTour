const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [a,b] = input[0].split(" ");

console.log(Math.max(Number(a.split("").reverse().join("")) , Number(b.split("").reverse().join(""))))
