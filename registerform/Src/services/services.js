const User = require('../model/formmodel');

exports.createUser = async (userData) => {
  const { username, email, password } = userData;

  // Check if the email is already registered
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('Email already registered');
  }

  // Create a new user
  const user = new User({ username, email, password });
  await user.save();
  return user;
};
