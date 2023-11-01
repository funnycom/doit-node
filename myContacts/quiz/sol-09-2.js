// 익스프레스를 사용하여, GET 요청으로 들어온 요청 파라미터의 name 값을 화면에 출력하는 코드를 작성하세요.

const express = require("express");
const app = express();

app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

app.listen(3000, () => {
  console.log("서버 실행 중");
});
