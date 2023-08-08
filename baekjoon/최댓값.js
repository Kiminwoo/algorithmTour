const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let arr = input.map(Number);
let maxValue = Math.max(...arr);
let maxIndex = arr.indexOf(maxValue);

console.log(`${maxValue}`)
console.log(`${maxIndex+1}`)
