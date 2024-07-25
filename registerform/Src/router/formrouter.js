const express = require('express');
const userController = require('../controller/formcontroller');

const router = express.Router();

router.post('/register', userController.register);

module.exports = router;
