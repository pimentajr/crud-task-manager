const taskModel = require('../models/taskModel');
const { validateTask } = require('../helpers/validateTask');

const createNewTask = async ({ tag, task, status, userId }) => {
  const validate = await validateTask({ task, status });

  if (validate !== null) return { erroCode: validate };
  
  const task = await taskModel.create({ tag, task, status, userId });
  return task;
};

module.exports = {
  createNewTask,
};