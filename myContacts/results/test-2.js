const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("홍길동");
});

server.listen(3000, () => {
  console.log("server started");
});
