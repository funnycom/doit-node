// fs 모듈의 readdir 함수의 withFileTypes 옵션 연습하기 

const fs = require("fs");

fs.readdir("./", { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(files);
});
