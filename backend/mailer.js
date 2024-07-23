import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import expressAsyncHandler from 'express-async-handler';
import generateOTP from './generateOTP.js'; // Corrected path

dotenv.config();

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  service: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export const sendEmail = expressAsyncHandler(async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email);

    const otp = generateOTP();

    var mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Verify your email address",
      text: `Your OTP is: ${otp}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error('Error sending email:', error); // Log detailed error
        res.status(500).json({ message: "Failed to send OTP", error: error.message });
      } else {
        console.log("OTP sent successfully!");
        res.status(200).json({ message: "OTP sent successfully", otp });
      }
    });
  } catch (error) {
    console.log("Error in sendEmail function: ", error);
    return res.status(500).json({ message: "Failed to send OTP", error: error.message });
  }
});
