// 동기로 파일 삭제하기

const fs = require("fs");

fs.unlinkSync("./text-1.txt");
console.log("file deleted");
