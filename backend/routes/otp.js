import express from 'express';
import { sendEmail } from '../mailer.js'; // Adjust path as needed

const router = express.Router();

router.post('/send-otp', (req, res) => {
    console.log('Received /send-otp request:', req.body); // Add logging
    sendEmail(req, res);
  });

export default router;


