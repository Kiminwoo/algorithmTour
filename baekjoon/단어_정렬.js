const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const loop = Number(input[0]);

let arr = [];
let result = "";

for(let i=1; i<= loop ; i++){
    arr.push(input[i]);
}

let data = [...new Set(arr)];

data.sort(function(a,b){
    // a , b 길이가 서로 다를경우 길이가 짧은것 먼저 
    if(a.length != b.length){
        return a.length - b.length;
    } else { // a , b 길이가 서로 같다면
        if(a < b) {return -1;}
        else if( a > b ) {return 1;}
        else {return 0;}
    }
})

data.map((x)=>{
    result += x +"\n";
})

console.log(result);

