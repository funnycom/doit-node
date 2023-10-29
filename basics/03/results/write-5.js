// fs 모듈의 appendFile 함수 연습하기 (결과 비교 파일은 03\results\write-5.js)

const fs = require("fs");

fs.appendFile("./text-2.txt", "\n\n 새로운 내용 추가", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("appending to file");
});
