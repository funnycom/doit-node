// '/template' 경로에서 template.ejs 파일을 렌더링하는 코드를 작성하세요.

app.get("/template", (req, res) => {
  res.render("template");
});
