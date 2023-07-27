function solution(name, yearning, photo) {
    // name : yearning ...      
    let $pObj = {};
    let $result= [];
    // 이름별 , 점수를 담고 있는 객체 세팅
    name.map((n,nIndex)=>{
        $pObj[n] = yearning[nIndex];
    })
    
    photo.map((p,pIndex)=>{
        let $sum = 0;
        p.map((pName,pNameIndex)=>{
            // $pObj에 해당하는 이름이 있을 경우에만
            if(typeof $pObj[pName] != 'undefined'){
                $sum += $pObj[pName];
            }
        })
        $result.push($sum);
    })
}

solution(["may", "kein", "kain", "radi"],[5, 10, 1, 3],[["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]])