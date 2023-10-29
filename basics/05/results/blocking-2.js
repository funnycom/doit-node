// 서버에서 블로킹 I/O

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.end("HOME");
  } else if (req.url === "/about") {
    res.end("ABOUT");
  } else {
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("3000번 포트에서 서버 실행 중");
});
