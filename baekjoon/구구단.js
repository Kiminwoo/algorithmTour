const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.on('line',(line)=>{
    
    const input = line.toString().split('\n');
    
    let data = Number(input[0]);
    
    for(let loop = 1 ; loop <= 9 ; loop ++){
        console.log(`${data} * ${loop} = ${data * loop}`);
    }

    rl.close();
})

rl.on('close',()=>{
    // 입력이 끝나고 실행하는 코드 //
    process.exit();
})
