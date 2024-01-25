const express = require('express');
const router = express.Router();
const { getAllContacts, createContact , updateContact, deleteContact, getContact }= require('../controller/contactController');
const { create } = require('domain');

router.route('/').get(getAllContacts);

router.route('/').post(createContact);

router.route('/:id').get(getContact);

router.route('/:id').put();

router.route('/:id').delete(deleteContact);

module.exports = router;