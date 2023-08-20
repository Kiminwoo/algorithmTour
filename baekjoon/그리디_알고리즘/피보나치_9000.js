const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// 피보나치 세팅 
let pibo = [];
pibo.push(0);
pibo.push(1);

// 1,000,000,000 보다 작을때 까지 피보나치 수 세팅 
while(pibo[pibo.length-1]< 1e9){
    pibo.push(pibo[pibo.length-2] + pibo[pibo.length-1]);
}

let testCase = Number(input[0]);
for(let tc=1; tc <= testCase; tc++){
    let n = Number(input[tc]);
    let result = [];
    
    // 피보나치 배열중 가장 큰 수의 인덱스
    let i = pibo.length -1;
    
    // 비교 후 목표 값 n에서 빼내는 식
    while(n>0){
        
        if(n >=pibo[i]){
            n -= pibo[i];
            result.push(pibo[i]);
        }
        i--;
        
    }
    
    let answer = "";
    for(let i= result.length -1; i >= 0; i--){
        answer += result[i] + " ";
    }
    console.log(answer);
}

