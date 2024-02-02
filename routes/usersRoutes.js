const express = require('express');
const router = express.Router();
const { registerUser, currentUser, loginUser } = require('../controller/userController');
const validateToken = require('../middleware/validateTokenHandler');

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/current', validateToken, currentUser);

module.exports = router;