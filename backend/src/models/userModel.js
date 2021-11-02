const connection = require('./connection');

const create = async ({ name, email, password }) => {
  const db = await connection();
  const inserted = await db.collection('users').insertOne({ name, email, password });
  return { name, email, _id: inserted.insertedId };
};

module.exports = {
  create,
};