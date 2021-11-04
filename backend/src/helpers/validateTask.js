const { ObjectId } = require('mongodb'); 
const connection = require('../models/connection');

const validateTask = async ({ tag, task, status }) => {
  if (!tag || !task || !status) return 'Invalid entries. Try again.';
  return null;
};

const validadeId = (id) => {
  if (!ObjectId.isValid(id)) return 'task not found';
  return null;
};

const validateIdExists = async (id) => {
  const validade = validadeId(id);
  if (validade) return validade;

  const db = await connection();
  const validateTaskIdExists = await db.collection('tasks').findOne(ObjectId(id));
  if (validateTaskIdExists) return null;
  return 'task not found';
};

module.exports = { validateTask, validateIdExists };