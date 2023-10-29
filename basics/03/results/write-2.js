// 동기로 파일 기록하기 - existsSync 함수, writeFileSync 함수

const fs = require("fs");

const data = fs.readFileSync("example.txt", "utf8");
if (fs.existsSync("text-1.txt")) {
  console.log("file already exist");
} else {
  writeFileSync("text-1.txt", data);
}

