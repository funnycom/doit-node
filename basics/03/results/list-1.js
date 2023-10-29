// fs 모듈의 readdirSync 함수 연습하기 

const fs = require("fs");

let files = fs.readdirSync("./");
console.log(files);
