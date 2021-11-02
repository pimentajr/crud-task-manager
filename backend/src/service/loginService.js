const jwt = require('jsonwebtoken');
const User = require('../models/loginModel');
const { validateLogin, validateEmail } = require('../helpers/validateLogin');

const secret = 'seusecretdetoken';

const createNewToken = async (email, password) => {
  if (validateLogin(email, password)) return { erroCode: 'All fields must be filled' };

  const user = await User.getByEmail(email);

  if (validateEmail(user, password)) return { erroCode: 'Incorrect username or password' };

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, secret, jwtConfig);

  return token;
 };

 module.exports = {
  createNewToken,
};