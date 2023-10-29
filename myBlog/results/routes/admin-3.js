const express = require("express");
const router = express.Router();
const adminLayout = "../views/layouts/admin";
const adminLayout2 = "../views/layouts/admin-nologout";
const asyncHandler = require("express-async-handler");

/**
 * GET /admin
 * Admin page
 */
router.get("/admin", (req, res) => {
  const locals = {
    title: "관리자 페이지",
  };

  res.render("admin/index", { locals, layout: adminLayout2 });
});

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

module.exports = router;
