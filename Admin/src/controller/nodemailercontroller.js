const sendOTPService = require("../services/nodemailerservices");

const sendOTPController = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send({ error: 'Email is required' });
    }

    try {
        await sendOTPService.sendAndStoreOTP(email);
        res.status(200).send({ message: 'OTP sent and stored successfully' });
    } catch (error) {
        console.error('Error in sendOTPController:', error.stack);
        res.status(500).send({ error: 'Failed to send OTP' });
    }
};

module.exports = {
    sendOTPController,
};
