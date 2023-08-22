const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let loop = Number(input[0]);
let objArr= [];
let result = "";

for(let i=1; i <= loop ; i++){
    let [x,y] = input[i].split(' ').map(Number);
    let obj = {};
    obj.x = x;
    obj.y = y;
    objArr.push(obj);
}

objArr.sort(function(a,b){
    if(a.x == b.x){
        return a.y - b.y
    } else {
        return a.x - b.x
    }
})

objArr.map((obj)=>{
    result += obj.x +" " + obj.y +"\n";
})

console.log(result);
