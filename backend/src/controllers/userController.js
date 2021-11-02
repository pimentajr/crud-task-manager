const userService = require('../service/userService');

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userService.createNewUser({ name, email, password });
    if (user.erroCode) { 
      return res.status(user.statusCode)
        .json({
            message: user.erroCode,
        });
    }
    return res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'User error.' });
  }
};

module.exports = {
  createUser,
};