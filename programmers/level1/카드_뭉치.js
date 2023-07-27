function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    
    goal.forEach((g)=>{        

        // cards1 , cards2 포함 여부 ( default : true )
        let $passFlag = true;    

        if(cards1.length != 0){
            if(cards1[0] ==g){
                cards1.shift();
                return;
            } else {
                $passFlag = false;
            }
        }

        if (cards2.length != 0){
            if(cards2[0] ==g){
                cards2.shift();
                return;
            } else {
                $passFlag = false;
            }
        }
    
        if( !$passFlag ){
            answer = 'No'
        }

    })
    
    return answer;
}