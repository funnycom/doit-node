// 라우팅 연습하기

const http = require("http");

const server = http.createServer((req, res) => {
  // 요청 메서드와 URL 가져오기
  const { method, url } = req;
  res.setHeader("Content-Type", "text/plain");

  // URL에 따라 응답을 다르게 처리
  if (method === "GET" && url === "/home") {
    res.statusCode = 200;
    res.end("HOME");
  } else if (method === "GET" && url === "/about") {
    res.statusCode = 200;
    res.end("ABOUT");
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("3000번 포트에서 서버 실행 중");
});
