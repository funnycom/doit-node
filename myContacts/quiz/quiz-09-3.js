// 익스프레스에서 PUT 메서드를 사용하여 이름이 john인 사용자의 나이(age)를 한 살 줄이는 라우트를 작성하려고 합니다.

let users = { john: { age: 30 } };

app.put("/updateAge", (req, res) => {
  if (users.john) {
    users.john.age = req.body.age - 1;
    res.send(`원래 값: ${req.body.age}, 수정된 값 : ${users.john.age}`);
  }
});
