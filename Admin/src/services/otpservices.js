
const OTP = require("../Models/nodemailermodel");
const VerifiedUser = require("../Models/verifiedUserModel");

const verifyOTP = async (email, otp) => {
  const otpEntry = await OTP.findOne({ email });

  if (!otpEntry || otpEntry.otp !== otp) {
    return false;
  }

  // OTP is correct, delete the OTP entry
  await OTP.deleteOne({ email });

  // Store the email in the VerifiedUser collection
  const verifiedUser = new VerifiedUser({ email });

  try {
    await verifiedUser.save();
    console.log(`Email verified and stored: ${email}`);
  } catch (error) {
    console.error(`Error storing verified email for ${email}:`, error);
    throw error;
  }

  return true;
};

module.exports = {
  verifyOTP,
};

