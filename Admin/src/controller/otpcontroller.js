const otpService = require("../services/otpservices");

const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).send({ error: 'Email and OTP are required' });
  }

  try {
    const isValid = await otpService.verifyOTP(email, otp);
    if (isValid) {
      res.status(200).send({ message: 'OTP verified successfully and email stored' });
    } else {
      res.status(400).send({ error: 'Invalid OTP' });
    }
  } catch (error) {
    console.error('Error in verifyOTP:', error.stack);
    res.status(500).send({ error: 'Failed to verify OTP' });
  }
};

module.exports = {
  verifyOTP,
};
