const express = require("express");
const router = express.Router();
const {
  getRegister,
  getLogin,
  loginUser,
} = require("../controllers/loginController");

router.route("/").get(getLogin).post(loginUser);
router.route("/register").get(getRegister);

module.exports = router;
