const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let loop = Number(input[0]);

for(let s=1; s <= loop ; s++){
    
    // 데이터  
    let data = input[s].split(' ').map(Number);
    
    // 학생 수 
    let n = data[0];
    
    // 점수 총합 
    let sum = 0 ;
    
    // 점수 총합 계산
    for(let i=1; i<=n; i++){
        sum +=data[i];
    }
    // 평균 계산 
    let average = sum / n;
    // 평균 이상 학생 수 
    let cnt = 0;
    for(let i=1; i<=n; i++){
        if(data[i] > average){
            cnt += 1;
        }
    }
    // 소수점 세번째 짜리 까지 
    console.log(`${(cnt / n * 100).toFixed(3)}%`);
}