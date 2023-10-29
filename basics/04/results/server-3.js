// 응답 객체 확인하기 - 응답 헤더, 응답 본문, 응답 종료

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method); // 요청 메서드 확인

  res.setHeader("Content-Type", "text/plain"); // 응답 헤더
  res.write("Hello Node"); // 응답 본문
  res.end(); // 응답 종료
});

server.listen(3000, () => {
  console.log("3000번 포트에서 서버 실행 중");
});
