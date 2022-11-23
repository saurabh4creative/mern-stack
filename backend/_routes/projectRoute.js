const express = require('express');
const router  = express.Router();
const projectController = require('../_controller/projectController'); 
const authMiddleware = require('../_middleware/AuthMiddleware');

router.use(authMiddleware);
router.post('/create', projectController.create_project);
router.get('/all', projectController.get_list);
router.get('/detail/:id', projectController.get_detail);

module.exports = router;