const express = require('express')
const router  = express.Router() 
const ticketController = require('../_controller/ticketController')
 
router.get('/create', ticketController.get_Data);

router.post('/create', ticketController.create_create);

router.get('/all', ticketController.get_all);

module.exports = router;