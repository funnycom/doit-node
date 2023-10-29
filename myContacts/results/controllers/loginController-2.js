const asyncHandler = require("express-async-handler");

//@desc Get login page
//@route GET /
const getLogin = (req, res) => {
  res.render("home");
};

//@desc Login user
//@route POST /
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    res.send("Login success");
  } else {
    res.send("Login failed");
  }
});

module.exports = { getLogin, loginUser };
