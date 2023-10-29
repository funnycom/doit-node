const express = require("express");
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs";
const Post = require("../models/Post");
const asynchandler = require("express-async-handler");

router.get(
  ["/", "/home"],
  asynchandler(async (req, res) => {
    const locals = {
      title: "Home",
    };

    const data = await Post.find({});
    res.render("index", { locals, data, layout: mainLayout });
  })
);

router.get("/about", (req, res) => {
  res.render("about", { layout: mainLayout });
});

router.get("/contact", (req, res) => {
  res.render("contact", { layout: mainLayout });
});

module.exports = router;
