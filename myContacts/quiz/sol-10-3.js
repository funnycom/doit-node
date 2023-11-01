// '/template' 경로로 요청했을 때 template.ejs 파일을 렌더링하는 코드를 작성하세요.

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/template", (req, res) => {
  res.render("template");
});

app.listen(3000, () => {
  console.log(`서버 실행 중`);
});
