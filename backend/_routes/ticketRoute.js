const express = require('express')
const router  = express.Router() 
const ticketController = require('../_controller/ticketController')

const authMiddleware = require('../_middleware/AuthMiddleware');

router.use(authMiddleware);
router.get('/create', ticketController.get_Data);
router.post('/create', ticketController.create_create);
router.get('/all', ticketController.get_all);
router.get('/my-ticket', ticketController.my_tickets);

module.exports = router;