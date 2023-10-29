const fs = require("fs");
const path = require("path");


  fs.readdir('./', (err, files) => {
    if (err) {
      console.log(err);
    } else {
      let count = 0;
      files.forEach(file => {
        if (path.extname(file) === '.txt') {
          count++;
        }
      });
      console.log(`.txt 확장자를 가진 파일의 갯수: ${count}`);
    }
  });


