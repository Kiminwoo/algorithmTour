// const input = require("fs").readFileSync('/dev/stdin').toString().split('\n');

let input =[];
input[0] = "4 11";
input[1] = "802";
input[2] = "743";
input[3] = "457";
input[4] = "539";


// k : 가지고 있는 랜선의 개수 (k)
// n : 필요한 랜선의 개수 (n)
let k = Number(input[0].split(' ')[0]);
let n = Number(input[0].split(' ')[1]);

// 각 랜선의 길이
let arr = [];

for(let i=1; i <=k; i++){
    arr.push(Number(input[i]));
};

// 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let start = 1;
let end = arr.reduce((a,b)=> Math.max(a,b));
let result = 0;

// 이진 탐색 수행(반복문)
while(start <= end){

    // 현재의 중간 (길이)
    let mid = parseInt((start+end) / 2);
    
    // 가지고 있는 각 랜선을 잘라서 길이가 mid인 랜선을 몇 개 만들 수 있을지
    let total = 0;
    
    for(x of arr){
        total += parseInt(x / mid);
    }

    // 만들 수 있는 랜선의 개수가 부족한 경우 길이 줄이기
    if(total < n){
        end = mid -1
    }

    // 만들 수 있는 랜선의 개수가 충분한 경우 길이 늘리기
    else {
        result = mid;
        start = mid +1;
    }
}

console.log(result);