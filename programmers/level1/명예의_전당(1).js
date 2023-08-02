function solution(k, score) {
    let answer = [];
    let rankArr = [];

    score.map((s,sIndex)=>{
        
        // 명예의 전당 자리 세팅 
        if( sIndex < k ){
            rankArr.push(s);
        } else {
            if(s > rankArr[0]){
                rankArr.shift();
                rankArr.push(s);
            }
        }
        rankArr.sort(function(a,b){return a-b;});
        answer.push(rankArr[0]);
    })
    
    console.log(`${rankArr}`);
    console.log(`${answer}`);

    return answer;
}

solution(3,[10, 100, 20, 150, 1, 100, 200])