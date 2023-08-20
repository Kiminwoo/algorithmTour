const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

function palindrome(x){
    return x == x.split('').reverse().join('');
}

let testCase = Number(input[0]);

// 문자열 하나씩 처리
for(let tc =1; tc <= testCase; tc++){
    let data = input[tc];
    
    // 회문일 경우 
    if(palindrome(data)){
        console.log(0);
    } else { // 회문이 아닐 경우 유사회문 판단
        
        let found = false;
        let n = data.length;
        
        for(let i=0; i < parseInt(n / 2); i++){
            
            // 대칭이 아닐 경우 
            if(data[i] != data[n -i -1]){
                
                // 앞쪽에 있는 해당 원소를 제거해 본 뒤에 회문 검사 
                if(palindrome(data.slice(0,i) + data.slice(i+1,n))){
                    found = true;
                }
                // 뒤쪽에 있는 해당 원소를 제거해 본 뒤에 회문 검사 
                if(palindrome(data.slice(0,n-i-1)+ data.slice(n-i,n))){
                    found = false;
                }
                break;
                
            }
        }
        // 유사 회문일 경우 
        if(found) {
            console.log(1);
        } else {
            // 회문도 아니고 유사 회문도 아닐 경우
            console.log(2);
        }
    }
}