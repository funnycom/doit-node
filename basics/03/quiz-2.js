// 현재 코드에서 사용하고 있는 writeData 함수를 내보내는 file.js 모듈을 작성하세요.

const writeData = require("./file.js");

const data = 'This is sample of mine';
writeData('./mydata.txt', data);
