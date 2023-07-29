function solution(wallpaper) {
    var answer = [];
    let newArr = [];

    //  xIndex : x 
    wallpaper.map((w,xIndex)=>{

        // # 을 포함했을 경우
        if(w.includes("#")){

            // # 을 포함한 문자열을 배열로 변환 
            let findArr = [...w];

            // 문자열에서 #의 위치로 좌표 배열 세팅 
            // yIndex : y
            findArr.map((f,yIndex)=>{
                if(f == "#"){
                    newArr.push([xIndex,yIndex]);
                }
            })

        }

    })
    
    // x의 값이 제일 작은 좌표의 x값
    newArr.sort((a,b)=> a[0] < b[0] ? -1 : 1);
    answer.push(newArr[0][0]);
    
    // y의 값이 제일 작은 좌표의 y값
    newArr.sort((a,b)=> a[1] < b[1] ? -1 : 1);
    answer.push(newArr[0][1]);

    // x의 값이 제일 큰 x좌표의 x값 + 1 
    newArr.sort((a,b)=> a[0] > b[0] ? -1 : 1);
    answer.push(newArr[0][0]+1);

    // y의 값이 제일 큰 y좌표의 y값 + 1 
    newArr.sort((a,b)=> a[1] > b[1] ? -1 : 1);
    answer.push(newArr[0][1]+1);

}

solution(["..........", ".....#....", "......##..", "...##.....", "....#....."])