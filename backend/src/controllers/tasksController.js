const taskService = require('../service/recipesService');

const createTask = async (req, res) => {
  try {
    const { tag, task, status } = req.body;
    const { _id: userId } = req.user;
    const task = await taskService.createNewTask({ tag, task, status, userId });
    if (task.erroCode) {
      return res.status(400)
        .json({
            message: task.erroCode,
        });
    }
    return res.status(201).json({ task });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Task error.' });
  }
};

module.exports = {
  createTask,
};