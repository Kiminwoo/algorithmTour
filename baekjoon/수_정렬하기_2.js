const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let loop = Number(input[0]);
let resultArr = [];
let result = "";
for(let i=1; i <= loop; i++){
    resultArr.push(Number(input[i]));
}

resultArr.sort(function(a,b){return a-b});

resultArr.map((x)=> {result += x +"\n";})
console.log(`${result}`);