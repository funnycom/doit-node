// 현재 코드에서 사용하고 있는 writeData 함수를 내보내는 file.js 모듈을 작성하세요.
// 여기에서는 파일 이름 중복을 피하기 위해 file.js 대신 file-sol.js를, mydata.txt 대신 mydata-sol.txt를 사용했습니다.

const writeData = require("./file-sol.js");

const data = "This is sample of mine";
writeData("./mydata-sol.txt", data);
