const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  addContactForm,
} = require("../controllers/contactController");

// Render routes
router.route("/").get(getAllContacts).post(createContact);
router.get("/add", addContactForm);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
