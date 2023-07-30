function solution(s) {
    var answer = [];
    let compareArr = [];
    
    [...s].map((str,strIndex)=>{
        if(!compareArr.includes(str)){
            answer.push(-1);
            compareArr.push(str);
        } else {
            answer.push(strIndex - compareArr.lastIndexOf(str));
            compareArr.push(str);
        }
    })
    
    return answer;
}