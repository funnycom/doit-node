// '/form' 경로로 POST 요청을 통해 전달된 폼 데이터 중 'username' 필드를 콘솔에 출력하는 코드를 작성하세요.

app.post("/form", (req, res) => {
  console.log(req.body.username);
});
