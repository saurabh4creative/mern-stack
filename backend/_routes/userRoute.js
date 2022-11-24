const express = require('express');
const router  = express.Router()
const userController = require('../_controller/userController');

const authMiddleware = require('../_middleware/AuthMiddleware');

router.post('/register', userController.user_register)
router.post('/activate', userController.user_activate)
router.post('/login', userController.user_login)

router.use(authMiddleware);

router.get('/dashboard', userController.user_dashboard)

module.exports = router;