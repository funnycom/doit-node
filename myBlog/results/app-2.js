require("dotenv").config(); // .env에 있는 변수 가져오기
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = process.env.PORT || 3000; // .env에 PORT가 없으면 3000번 포트 사용

// 루트(/) 경로로 요청하면 routes\main.js의 라우트 사용
app.use("/", require("./routes/main"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
