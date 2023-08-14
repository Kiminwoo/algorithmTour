const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let data = input[0].split(' ').map(Number).sort(function(a,b){return a-b});
let result = "";

data.map((x)=>{result += x+" ";})

console.log(result)