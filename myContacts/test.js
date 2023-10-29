const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("request received");
});

server.listen(3000, () => {
  console.log("server started");
});
