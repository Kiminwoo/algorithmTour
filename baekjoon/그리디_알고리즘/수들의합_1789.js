const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let s = Number(input[0]);

let sum = 0;
let current = 0;

while( sum <= s){
    current += 1;
    sum += current;
}

console.log(current -1);