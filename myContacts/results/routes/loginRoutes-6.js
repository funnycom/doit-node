const express = require("express");
const router = express.Router();
const {
  getLogin,
  loginUser,
  logout,
} = require("../controllers/loginController");

router.route("/").get(getLogin).post(loginUser);
router.route("/logout").get(logout);

module.exports = router;
