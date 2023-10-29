const asyncHandler = require("express-async-handler");

//@desc Get login page
//@route GET /
const getLogin = (req, res) => {
  res.render("home");
};

module.exports = { getLogin };
