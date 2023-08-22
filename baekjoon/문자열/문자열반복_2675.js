const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let loop = Number(input[0]);

for(let i=1 ; i <=loop ; i++){
    let [r,s] = input[i].split(" ");
    let resultStr = "";
    
    for(let j =0 ; j <= s.length; j++){
        resultStr += s.charAt(j).repeat(r);
    }
    console.log(resultStr);
}