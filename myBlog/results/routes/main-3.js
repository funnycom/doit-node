const express = require("express");
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs";
const Post = require("../models/Post");

router.get(["/", "/home"], (req, res) => {
  const locals = {
    title: "Home",
  };
  res.render("index", { locals, layout: mainLayout });
});

router.get("/home", (req, res) => {
  const locals = {
    title: "Home",
  };
  res.render("index", { locals, layout: mainLayout });
});

// 임시 데이터 저장하기
// Post.insertMany([
//   {
//     title: "제목 1",
//     body: "내용 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//   },
//   {
//     title: "제목 2",
//     body: "내용 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//   },
//   {
//     title: "제목 3",
//     body: "내용 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//   },
//   {
//     title: "제목 4",
//     body: "내용 4 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//   },
//   {
//     title: "제목 5",
//     body: "내용 5 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//   },
// ]);

router.get("/about", (req, res) => {
  res.render("about", { layout: mainLayout });
});

module.exports = router;
