function solution(food) {
    var answer = '';
    
    food.map((f,fIndex)=>{

        // index = 0 -> 물 , food 2개 이상일 경우에만 경쟁자 한명씩 에게 배분 가능
        if(fIndex!=0 && f >= 2){
            const shareFood = parseInt( f / 2 );
            for(let loop=0; loop < shareFood ; loop++){
                answer += fIndex;
            }
        }
        
    })
    answer +=  ("0"+answer.split("").reverse().join(""));

    console.log(`${answer}`);

    return answer;
}

solution([1, 3, 4, 6]);

