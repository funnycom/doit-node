// 리더블 스트림 연습하기 

const fs = require("fs");

const readStream = fs.createReadStream("./readMe.txt");

readStream.on("data", (chunk) => {
  console.log("new chunk received:");
  console.log(chunk);
});
readStream.on("end", () => {
  console.log("finished reading data");
});
readStream.on("error", (err) => {
  console.log(`Error reading the file: ${err}`);
});