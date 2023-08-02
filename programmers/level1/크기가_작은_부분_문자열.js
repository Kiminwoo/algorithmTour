function solution(t, p) {
    let answer = 0;
    [...t].map((tStr,tIndex)=>{
        const sliceNum = t.slice(tIndex , p.length + tIndex);
        if(sliceNum.length == p.length){
            sliceNum <= p ? answer+=1 : "";
        }
    })
    
    return answer;
}

solution("10203","15");
