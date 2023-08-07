const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.on('line',(line)=>{
    
    const input = line.toString().split('\n');
    
    let data = Number(input[0]);
    
    for(let loop=1; loop <= data; loop++ ){
        let starStr = ""
        for(let star = 0 ; star < loop ; star++){
            starStr += "*";
        }
        console.log(starStr);
    }
    
    rl.close();
})

rl.on('close',()=>{
    process.exit();
})