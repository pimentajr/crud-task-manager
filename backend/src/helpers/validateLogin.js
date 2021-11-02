const validateLogin = (email, password) => {
  if (!email || !password) return true;
  return false;
};

const validateEmail = (user, password) => {
  if (!user || user.password !== password) return true;
  return false;
};

module.exports = { validateLogin, validateEmail };