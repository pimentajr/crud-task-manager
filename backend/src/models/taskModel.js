const connection = require('./connection');

const getAll = async (userId) => {
  const db = await connection();
  const data = await db.collection('tasks').find({ userId }).toArray();
  return data;
};

const create = async ({ tag, task, status, userId }) => {
  const db = await connection();
  const inserted = await db.collection('tasks').insertOne({ 
    tag, task, status, userId });
  return { _id: inserted.insertedId, tag, task, status, userId };
};

const exclude = async (id) => {
  const db = await connection();
  const recipe = await db.collection('tasks').findOne(ObjectId(id));
  await db.collection('tasks').deleteOne({ _id: ObjectId(id) });
  return recipe;
};

module.exports = {
  getAll,
  create,
  exclude
};