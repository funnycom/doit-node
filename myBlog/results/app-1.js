require("dotenv").config(); // .env에 있는 변수 가져오기
const express = require("express");

const app = express();
const port = process.env.PORT || 3000; // .env에 PORT가 없으면 3000번 포트 사용

app.get("/", (req, res) => {
  res.send("Hello World!"); // Hello World! 출력
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
