// '/about' 경로로 GET 요청이 들어왔을 때
// "This is the About page"라는 메시지를 보내는 라우터 미들웨어를 추가해보세요.
// Router 객체를 사용해서 작성하세요.

const express = require("express");
const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is the About page");
});

app.use("/about", router);

app.listen(3000, () => {
  console.log("Server is running port 3000!");
});
