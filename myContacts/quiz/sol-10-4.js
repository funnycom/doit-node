//‘/’ 경로로 사용자 이름과 함께 요청하면
// username 변수를 index.ejs로 보내서 출력하는 애플리케이션을 작성하세요.
// 이 파일은 app.js 의 코드입니다.

const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/:username", (req, res) => {
  let username = req.params.username;
  res.render("index", { username: username });
});

app.listen(3000, () => {
  console.log(`서버 실행 중`);
});
