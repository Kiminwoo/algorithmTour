const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);
let line = 1;

for(let tc = 0 ; tc < testCase; tc ++){
    n = Number(input[line]);
    let arr = [];
    
    for(let i = line + 1 ; i <= line + n ; i++){
        let data = input[i].split(' ').map(Number);
        arr.push(data);
    }
    
    // x 순위를 기준으로 오름차순
    arr.sort((x,y)=> x[0] - y[0]);
    
    let count = 0;
    let minValue = 100001;
    
    for(let [x,y] of arr){
        // y 순위 값이 가장 작다면 
        if( y < minValue){
            minValue = y;
            count += 1;
        }
    }
    console.log(count);
    line += n + 1;
}