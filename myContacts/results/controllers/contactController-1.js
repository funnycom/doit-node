const asyncHandler = require("express-async-handler");

// @desc Get all contacts
// @route GET /contacts

const getAllContacts = asyncHandler(async (req, res) => {
  // 전체 연락처 보기
  res.status(200).send("Contacts Page");
});

// @desc Create a contact
// @route POST /contacts
const createContact = asyncHandler(async (req, res) => {
  // 새 연락처 추가하기
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).send("필수값이 입력되지 않았습니다.");
  }
  res.status(201).send("Create Contacts");
});

// @desc Get contact
// @route GET /contacts/:id
const getContact = asyncHandler(async (req, res) => {
  // 연락처 상세 보기
  res.status(200).send(`View Contact for ID: ${req.params.id}`);
});

// @desc Update contact
// @route PUT /contacts/:id
const updateContact = asyncHandler(async (req, res) => {
  // 연락처 수정하기
  res.status(200).send(`Update Contact for ID: ${req.params.id}`);
});

// @desc Delete contact
// @route DELETE /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  // 연락처 삭제하기
  res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
