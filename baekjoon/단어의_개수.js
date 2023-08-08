const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let data = input[0].trim().split(" ");

if(data == ""){
    console.log(0);
} else {
    console.log(data.length);
}
