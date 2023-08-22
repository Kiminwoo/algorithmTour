const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a,b,c] = input[0].split(' ').map(Number);

// 3개 모두 같을 경우 
if(a == b && b == c) console.log(10000+ b*1000);
// 2개 같을 경우 
else if ( a == b) console.log(1000+ b*100);
else if ( b == c) console.log(1000+ b*100);
else if ( a == c) console.log(1000+ a*100);
// 서로 다른 경우
else console.log(Math.max(a,b,c)*100);

