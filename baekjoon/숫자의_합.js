const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

console.log(input[1].split('').map(Number).reduce((a,b)=> a+b))