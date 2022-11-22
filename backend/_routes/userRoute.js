const express = require('express');
const router  = express.Router()
const userController = require('../_controller/userController');

router.post('/register', userController.user_register)

router.post('/activate', userController.user_activate)

router.post('/login', userController.user_login)

module.exports = router;