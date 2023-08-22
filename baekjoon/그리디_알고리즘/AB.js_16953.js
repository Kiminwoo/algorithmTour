const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let [a,b] = input[0].split(' ').map(Number);
let flag = false;
let cnt = 1;

while(a <= b){    
    if(a == b){
        flag = true;
        break;
    }
    
    // 2로 나누어 떨어지는 경우 
    if(b % 2 == 0){
        b =  parseInt( b / 2 );
    } else if( b % 10 == 1){ // 일의 자리가 1일 경우 
        b = parseInt ( b / 10);
    } else { // 위 경우가 모두 해당하지 않는 경우 
        break;
    }
        
    cnt++;
}

if(flag){
    console.log(cnt);
} else {
    console.log(-1);
}

