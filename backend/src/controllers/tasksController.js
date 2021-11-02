const taskService = require('../service/taskService');

const getAllTasks = async (req, res) => {
  try {
    const { _id: userId } = req.user;
    const getTasks = await taskService.getAllTasks(userId);
    return res.status(200).json(getTasks);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Tasks error.' });
  }
};

const createTask = async (req, res) => {
  try {
    const { tag, task, status } = req.body;
    const { _id: userId } = req.user;
    const create = await taskService.createNewTask({ tag, task, status, userId });
    if (create.erroCode) {
      return res.status(400)
        .json({
            message: create.erroCode,
        });
    }
    return res.status(201).json(create);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Task error.' });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { tag, task, status } = req.body;
    const update = await taskService.updateTask({ 
      tag, task, status, id });
    if (update.erroCode) { 
      return res.status(401)
        .json({
          message: update.erroCode,
        });
    }
    res.status(200).json(update);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Update error.' });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await taskService.deleteTask(id);
    if (deleteTask.erroCode) { 
      return res.status(401)
        .json({
          message: deleteTask.erroCode,
        });
    }
    res.status(204).json(deleteTask);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Delete error.' });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
};