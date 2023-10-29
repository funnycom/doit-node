// HTML 페이지 서빙하기

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  // 위 코드를 아래와 같이 작성해도 됩니다.
  // res.writeHead(200, { "Content-Type": "text/html" });
  const readStream = fs.createReadStream(__dirname + "/index.html", "utf8");
  readStream.pipe(res);
});

server.listen(3000, () => {
  console.log("3000번 포트에서 서버 실행 중");
});
