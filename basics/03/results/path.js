// path 모듈 연습하기 

const path = require("path");

// 경로 연결하기
const fullPath = path.join('some', 'work', 'ex.txt');
console.log(fullPath);

// 절대 경로
console.log( `파일 절대 경로 : ${__filename}`);

// 경로 추출하기
const dir = path.dirname(__filename);
console.log(`경로만 : ${dir}`);

// 파일 이름 추출하기
const fn = path.basename(__filename);
const fn2 = path.basename(__filename, '.js');
console.log(`파일 이름 : ${fn}`);
console.log(`파일 이름(확장자 제외) : ${fn2}`);

// 파일 확장자 추출하기
const ext = path.extname(__filename);
console.log(`파일 확장자: ${ext}`);
console.log(path.basename(__filename, ext));    

// 경로 분해하기
const parsedPath = path.parse(__filename);
console.log(parsedPath);


