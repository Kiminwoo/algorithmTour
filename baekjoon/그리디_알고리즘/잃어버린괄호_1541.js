const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// - 기준으로 그룹 나누기
let groups = input[0].split('-');

let answer=0;

for(let i=0; i < groups.length; i++){
    
    let cur = groups[i].split('+').map(Number).reduce((a,b)=>a+b);
    // + 라면 ( 첫번째 그룹은 항상 덧셈)
    if(i == 0){
        answer += cur;
    } else { // - 라면 ( 두번째 그룹부터 뺄셈)
        answer -= cur;
    }
}

console.log(answer);
