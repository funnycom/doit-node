// 사용하여 사용자가 입력한 숫자를 받아 해당 숫자의 제곱을 반환하는 API를 작성하세요.
// (예) "/square/5" 경로로 접속하면 25를 반환합니다.

const express = require("express");
const app = express();

// 넘겨 받은 number 값의 제곱을 반환하는 API
app.get("/square/:number", (req, res) => {
  const number = Number(req.params.number);
  const square = number * number;
  res.send(`square of ${number} is ${square}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
