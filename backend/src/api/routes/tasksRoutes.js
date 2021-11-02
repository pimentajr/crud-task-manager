const router = require('express').Router();
const tasksController = require('../../controllers/tasksController');
const validateJWT = require('../../auth/validateJWT');

router.get('/', validateJWT, tasksController.getAllTasks);
router.post('/', validateJWT, tasksController.createTask);
router.delete('/:id', validateJWT, tasksController.deleteTask);

module.exports = router;