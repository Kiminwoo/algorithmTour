const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let data = input[1].split(' ').map(Number);
let sortArr = [ ... new Set(data)];
let answer = "";
let myMap = new Map();

sortArr.sort(function(a,b){return a - b});

sortArr.map((x,xIndex)=>{
    myMap.set(x,xIndex);
})

for(d of data){
    answer += myMap.get(d) + " ";
}

console.log(answer);
