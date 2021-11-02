const userModel = require('../models/userModel');
const validateParams = require('../helpers/validateParams');

const createNewUser = async ({ name, email, password }) => {
  const validate = await validateParams.paramsValidation({ name, email, password });
  if (validate === 'Email already registered') return { erroCode: validate, statusCode: 409 };
  if (validate !== null) return { erroCode: validate, statusCode: 400 };
 
  const user = await userModel.create({ name, email, password });
  return user;
 };

 module.exports = {
  createNewUser,
};