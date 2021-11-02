const router = require('express').Router();
const tasksController = require('../../controllers/tasksController');
const validateJWT = require('../../auth/validateJWT');

router.post('/', validateJWT, tasksController.createTask);

module.exports = router;