const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const adminLayout = "../views/layouts/admin";
const adminLayout2 = "../views/layouts/admin-nologout";

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

/**
 * GET /register
 * Register administator
 */

router.get(
  "/register",
  asyncHandler(async (req, res) => {
    res.render("admin/index", { layout: adminLayout2 });
  })
);

/**
 * POST /register
 * Register administator
 */

router.post(
  "/register",
  asyncHandler(async (req, res) => {
    res.send("Register");
  })
);

module.exports = router;
