const connection = require('../models/connection');

const validateEntries = ({ name, email, password }) => {
  if (!name || !email || !password) return true;
  return false;
};

const validateEmailExists = async (email) => {
  const db = await connection();
  const validate = await db.collection('users').findOne({ email });
  return validate;
};

const paramsValidation = async ({ name, email, password }) => {
  const validEmail = /^[A-Za-z0-9._]+@([A-Za-z]+\.)[A-Za-z]{2,3}(\.[A-Za-z]{2})?$/;
  const entriesExists = validateEntries({ name, email, password });
  const emailExists = await validateEmailExists(email);

  if (entriesExists) return 'Invalid entries. Try again.';
  if (!validEmail.test(email)) return 'Invalid entries. Try again.';
  if (emailExists) return 'Email already registered';

  return null;
};

module.exports = { paramsValidation };