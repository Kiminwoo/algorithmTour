const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// 회의의 개수 
let n = Number(input[0]);

// 각 회의에 대한 (시작 시점 , 종료 시점)
let arr = [];

// 각 회의에 대한 정보 배열에 세팅
for(let i=1; i <= n; i++){
    arr.push(input[i].split(' ').map(Number));
}

arr.sort(function(a,b){
    if(a[1] != b[1]){
        return a[1] - b[1];
    } else {
        return a[0] - b[0];
    }
});

// 첫 번째 회의부터 확인 
let cnt = 1 , cur = 0 ;

for(let i =1 ; i < n ; i++){
    // 현재 회의가 끝난 이후에 회의가 시작되는 경우 
    if(arr[cur][1] <= arr[i][0]){
        cur = i;
        cnt +=1;
    }
}

console.log(cnt);
