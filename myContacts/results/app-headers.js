const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  const userAgents = req.headers["user-agent"];
  res.send(userAgents);
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
