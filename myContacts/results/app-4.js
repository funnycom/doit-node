const express = require("express");
const app = express();
const router = express.Router();

const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello Node!");
});

// 모든 연락처 가져오기
router.get("/contacts", (req, res) => {
  res.status(200).send("Contacts Page");
});

// 새 연락처 추가하기
router.post("/contacts", (req, res) => {
  res.status(201).send("Create Contacts");
});

// 연락처 상세보기
router.get("/contacts/:id", (req, res) => {
  res.status(200).send(`View Contact for ID: ${req.params.id}`);
});

// 연락처 수정하기
router.put("/contacts/:id", (req, res) => {
  res.status(200).send(`Update Contact for ID: ${req.params.id}`);
});

// 연락처 삭제하기
router.delete("/contacts/:id", (req, res) => {
  res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
});

app.use(router);

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
