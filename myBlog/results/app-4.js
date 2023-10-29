require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = process.env.PORT || 3000;

//레이아웃과 뷰 엔진 설정
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "./views");

// 정적 파일
app.use(express.static("public"));

app.use("/", require("./routes/main"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
