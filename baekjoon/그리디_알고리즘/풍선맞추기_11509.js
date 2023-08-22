const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const data = input[1].split(' ').map(Number);
let result = 0;
let arrow = new Array(1000001).fill(0);

for(let x of data){
    // 해당 높이에 화살이 있다면 
    if( arrow[x] > 0 ) {
        arrow[x] -= 1;
        arrow[x-1] += 1;
    } else { // 해당 높이에 화살이 없다면
        arrow[x-1] += 1;
        result += 1;
    }
}

console.log(result);