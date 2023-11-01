// ‘/form’ 경로로 DELETE 요청을 받아 ‘Deleted!’ 메시지를 표시하는 라우트 코드를 작성하세요.

app.delete("/form", (req, res) => {
  res.send("Deleted!");
  res.end();
  // res.end("Deleted!"); // 위와 동일한 결과
});
