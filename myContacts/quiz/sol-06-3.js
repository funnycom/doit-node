// " /" 경로로 접속하면 "Welcome"을 표시하고
// "/about" 경로로 접속하면 "This is the about page."라는 텍스트를 표시하는 라우트 작성하세요.

const express = require("express");
const app = express();

// 라우트
app.get("/", (req, res) => {
  res.send("Welcome");
});
app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

// 서버 실행
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
