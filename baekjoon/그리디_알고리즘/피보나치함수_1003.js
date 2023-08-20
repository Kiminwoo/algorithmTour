const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input[0]);

for(let i=1 ; i<= n ; i++){
    
    let k = input[i];
    let fibonacci = [[1,0], [0,1]];
  
    for(let j=2; j <= k ; j++){
        fibonacci[j] = [
            fibonacci[j-1][0] + fibonacci[j-2][0],
            fibonacci[j-1][1] + fibonacci[j-2][1]
        ];
    }
    
    console.log(fibonacci[k].join(" "));
}