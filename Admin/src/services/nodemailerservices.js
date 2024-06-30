const nodemailer = require('nodemailer');
const OTP = require("../Models/nodemailermodel");
require('dotenv').config();
console.log(process.env.USER);
console.log( process.env.APP_PASSWORD);

function generateOTP() {
    let digits = '0123456789'; 
    let OTP = ''; 
    let len = digits.length 
    for (let i = 0; i < 8; i++) { 
        OTP += digits[Math.floor(Math.random() * len)]; 
    } 
     
    return OTP; 
} 
const otp = generateOTP();
console.log(otp);
    // a= Math.floor(100000 + (Math.random * 900000))
    // return a;   



const sendOTP = async (email) => {
 

    const transporter = nodemailer.createTransport({
        service:"gmail",
        host: 'smtp.gmail.com',
        port: 465,
        secure: false, 
        auth: {
            user: process.env.USER,
            pass: process.env.APP_PASSWORD
        }
    });

    const mailOptions = {
        from: '"Hemanth Erragounta" <hemantherragountahemanth29@gmail.com>',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`,
      
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`OTP sent to ${email}: ${otp}`);
    } catch (error) {
        console.error(`Error sending OTP to ${email}:`, error);
        throw error;
    }

    return { otp, email };
};

const sendAndStoreOTP = async (email) => {
    const { otp, email: userEmail } = await sendOTP(email);

    const otpEntry = new OTP({
        email: userEmail,
        otp: otp
    });

    try {
        await otpEntry.save();
        console.log(`OTP stored for ${email}`);
    } catch (error) {
        console.error(`Error storing OTP for ${email}:`, error);
        throw error;
    }
};

module.exports = {
    sendOTP,
    sendAndStoreOTP,
   
};
