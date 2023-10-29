// 디렉터리 만들기 - mkdir 함수

const fs = require("fs");

if (fs.existsSync("./test")) {
  console.log("folder already exists");
} else {
  fs.mkdir("./test", (err) => {
    if (err) {
      console.error(err);
    }
    console.log("folder created");
  });
}
