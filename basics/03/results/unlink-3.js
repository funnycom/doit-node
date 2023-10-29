// 비동기로 파일 삭제하기 - unlink 함수

const fs = require("fs");

if (!fs.existsSync("./text-2.txt")) {
  console.log("file does not exist");
} else {
  fs.unlink("./text-2.txt", () => {
    console.log("file deleted");
  });
}
