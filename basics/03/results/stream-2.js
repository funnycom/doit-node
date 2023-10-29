// 라이터블 스트림 연습하기 (결과 비교 파일 : 03\results\stream-2.js)

const fs = require("fs");

const readStream = fs.createReadStream("./readMe.txt", "utf8");
const writeStream = fs.createWriteStream("./writeMe.txt");

readStream.on("data", (chunk) => {
  console.log("new chunk received:");
  writeStream.write(chunk);
});
