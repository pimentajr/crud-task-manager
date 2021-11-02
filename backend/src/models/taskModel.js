const connection = require('./connection');

const create = async ({ tag, task, status, userId }) => {
  const db = await connection();
  const inserted = await db.collection('tasks').insertOne({ 
    tag, task, status, userId });
  return { _id: inserted.insertedId, tag, task, status, userId };
};

module.exports = {
  create,
};