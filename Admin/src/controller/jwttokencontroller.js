const userService = require('../services/jwttokenservices');

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.registerUser(email, password);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { userId } = req.body;
    const token = userService.generateToken(userId);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
     register,
      login };
