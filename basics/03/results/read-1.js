// fs 모듈의 readFileSync 함수 연습하기 

const fs = require("fs");

const data = fs.readFileSync("example.txt");
console.log(data);
