const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const adminLayout = "../views/layouts/admin";
const adminLayout2 = "../views/layouts/admin-nologout";
const bcrypt = require("bcrypt");
const User = require("../models/User");

/**
 * GET /admin
 * Admin page
 */
router.get(
  "/admin",
  asyncHandler(async (req, res) => {
    const locals = {
      title: "관리자 페이지",
    };

    res.render("admin/index", { locals, layout: adminLayout2 });
  })
);

/**
 * POST /admin
 * Check admin login
 */
router.post(
  "/admin",
  asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "admin") {
      res.send("Success");
    } else {
      res.send("Fail");
    }
  })
);

// 관리자 등록 후 더 이상 사용하지 않음
/**
 * GET /register
 * Register administator
 */

// router.get(
//   "/register",
//   asyncHandler(async (req, res) => {
//     // res.render("admin/index", { layout: adminLayout2 });
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     const user = await User.create({
//       username: req.body.username,
//       password: hashedPassword,
//     });
//     res.json(`user created: ${user}`);
//   })
// );

module.exports = router;
