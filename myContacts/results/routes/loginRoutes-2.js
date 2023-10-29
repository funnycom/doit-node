const express = require("express");
const router = express.Router();
const { getLogin, loginUser } = require("../controllers/loginController");

router.route("/").get(getLogin).post(loginUser);

module.exports = router;
