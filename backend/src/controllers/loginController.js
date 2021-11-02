const loginService = require('../service/loginService');

const createToken = async (req, res) => {
  console.log(req.body)
  try {
    const { email, password } = req.body;
    const token = await loginService.createNewToken(email, password);
    if (token.erroCode) { 
      return res.status(401)
        .json({
            message: token.erroCode,
        });
    }
    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Login error.' });
  }
};

module.exports = {
  createToken,
};