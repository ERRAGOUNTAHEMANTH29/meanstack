const jwt = require('jsonwebtoken');
const User = require('../Models/jwttokenmodels');

const registerUser = async (email, password) => {
  const user = new User({ email, password });
  await user.save();
  return user;
};

const generateToken = (userId) => {
  const token = jwt.sign({ id: userId }, 'your_jwt_secret', { expiresIn: '1h' });
  return token;
};

module.exports = { registerUser, generateToken };
