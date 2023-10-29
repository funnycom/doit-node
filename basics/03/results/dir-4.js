// 여러 단계의 디렉터리 삭제하기 - rm 함수 

const fs = require("fs");

fs.rm("./test2", { recursive: true }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("folder deleted");
  }
});
