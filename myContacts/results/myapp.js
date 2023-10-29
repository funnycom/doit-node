const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts"); // 미들웨어 가져오기
const myLayout = "../views/layouts/myLayout"; // 레이아웃 파일 경로

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static("./public"));
app.use(expressLayouts); // 미들웨어 등록

app.get("/about", (req, res) => {
  res.render("about", { layout: myLayout });
});
app.get("/contact", (req, res) => {
  res.render("contact", { layout: myLayout });
});

app.listen(3000, () => {
  console.log(`3000번 포트에서 서버 실행 중`);
});
