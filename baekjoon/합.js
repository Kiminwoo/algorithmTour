const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout 
});

rl.on('line',(line)=>{
    const input = line.toString().split('\n');
    // 문자열을 수로 변환할때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
    let data = Number(input[0]);

    // 등차수열의 합 공식
    console.log(data*(data+1) / 2);
    rl. close();
})

rl.on('close', () => {
  // 입력이 끝나고 실행하는 코드 //
  process.exit();
});
