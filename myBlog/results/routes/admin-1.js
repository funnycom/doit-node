const express = require("express");
const router = express.Router();

/**
 * GET /admin
 * Admin page
 */
router.get("/admin", (req, res) => {
  res.send("Admin page");
});

module.exports = router;
