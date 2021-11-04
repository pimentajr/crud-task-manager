const connection = require('./connection');
const { ObjectId } = require('mongodb'); 

const getAll = async (userId) => {
  const db = await connection();
  const data = await db.collection('tasks').find({ userId }).toArray();
  return data;
};

const create = async ({ tag, task, status, userId }) => {
  const db = await connection();
  const inserted = await db.collection('tasks').insertOne({ 
    tag, task, status, userId, date: Date.now() });
  return { _id: inserted.insertedId, tag, task, status, userId };
};

const update = async ({ tag, task, status, id }) => {
  const db = await connection();
  await db.collection('tasks').updateOne(
    { _id: ObjectId(id) }, 
    { $set: { tag, task, status } },
  );
  return { _id: id, tag, task, status };
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
  update,
  exclude
};