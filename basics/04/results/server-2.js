// HTTP 모듈로 서버 만들고 실행하기

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req)
});

server.listen(3000, () => {
  console.log("3000번 포트에서 서버 실행 중");
});