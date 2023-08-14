const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const loop = Number(input[0]);

let arr = [];

for(let i=1 ; i <= loop ; i++){
    let obj = {};
    obj.age =  input[i].split(' ')[0] ; 
    obj.name = input[i].split(' ')[1] ;
    arr.push(obj);
}

function compare(a,b){
    // 나이가 같을 경우 이름순으로 
    if(Number(a.age) == Number(b.age)){
        return a.name - b.name   
    } else { // 나이가 같지 않을 경우 나이가 어린 순으로
       return Number(a.age) - Number(b.age)
    }
}

arr.sort(compare);

let answer = "";
for(obj of arr){
    answer += obj.age +" "+ obj.name +"\n";
}

console.log(answer);