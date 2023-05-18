function solution($numbers) {
    let $answer = [];
    
    for(let loopCnt1 = 0 ; loopCnt1 < $numbers.length; loopCnt1++){
        let chkValue = -1;

        for(let loopCnt2 =loopCnt1 + 1 ; loopCnt2 < $numbers.length ; loopCnt2++){
            if($numbers[loopCnt1] < $numbers[loopCnt2]){
                chkValue = $numbers[loopCnt2];
                break;
            }
        }

        $answer.push(chkValue);

    }

    return $answer;
}

