function solution(k, m, score) {
    var answer = 0;
    let result = [];
    let applePack = [];
    
    // score 오름차순으로 정렬 
    score.sort(function(a,b){return b - a ;})
    
    score.map((s,sIndex)=>{
        applePack.push(s);

        if( (sIndex+1) % m == 0){
            result.push(applePack);
            applePack = [];
        } 
    })

    result.map((r)=>{
        answer += Number(Math.min(...r)) * Number(r.length);
    });

    return answer;
}

solution(4,3,[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])