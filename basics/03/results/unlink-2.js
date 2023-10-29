// 동기로 파일 삭제하기 - existsSync 함수와 unlinkSync 함수

const fs = require("fs");

if (!fs.existsSync("./text-1.txt")) {
  // 파일이 없다면
  console.log("file does not exist");
} else {
  // 파일이 있다면
  fs.unlinkSync("./text-1.txt");
  console.log("file deleted");
}
