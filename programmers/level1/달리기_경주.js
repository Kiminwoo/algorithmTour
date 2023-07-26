function solution(players, callings) {
    let $obj = {};

    // 선수들 객체 세팅 
    players.forEach((p,pIndex)=>{
        $obj[p] = pIndex;
    })

    callings.forEach((c,cIndex)=>{
        let $curIndex = $obj[c];
        
        let $frontP = players[$curIndex-1];
        players[$curIndex-1] = players[$curIndex];
        players[$curIndex] = $frontP;

        $obj[c]--;
        $obj[$frontP]++;


    })

    return players;
}

solution(["mumu", "soe", "poe", "kai", "mine"],["kai", "kai", "mine", "mine"])




