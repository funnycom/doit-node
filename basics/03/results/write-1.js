// 동기로 파일 기록하기 - writeFileSync 함수

const fs = require("fs");

const data = fs.readFileSync("example.txt", "utf8");
writeFileSync("text-1.txt", data);
