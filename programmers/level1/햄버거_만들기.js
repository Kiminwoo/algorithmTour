/* 통과 코드 */
function solution(ingredient) {
    const stk = [];
    let cnt = 0;
    
    ingredient.forEach((i, idx)=>{
        stk.push(i);  
       
        if(stk.length >= 4){
            const find = stk.slice(-4).join('');
            if(find === '1231'){
                stk.pop();
                stk.pop();
                stk.pop();
                stk.pop();   
                cnt++;
            }
        } 
    })
    
    return cnt;
}

solution([2, 1, 1, 2, 3, 1, 2, 3, 1])