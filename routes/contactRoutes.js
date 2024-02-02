const express = require('express');
const router = express.Router();
const { getAllContacts, createContact , updateContact, deleteContact, getContact }= require('../controller/contactController');
const { create } = require('domain');

const validateToken = require('../controller/contactController')

router.use(validateToken)

router.route('/').get(getAllContacts).post(createContact);
router.route('/').get(getContact).put(updateContact).deleteContact(deleteContact)

module.exports = router;