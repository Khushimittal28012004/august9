const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpSchema = new Schema({
  email: { 
    type: String, 
    required: true,
    ref : "user",
    unique : true,
  },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 600 } // Expires after 10 minutes
});

module.exports = mongoose.model('Otp', otpSchema);


