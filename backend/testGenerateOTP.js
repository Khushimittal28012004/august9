import generateOTP from './generateOTP.js';

const testGenerateOTP = () => {
  for (let i = 0; i < 10; i++) {
    const otp = generateOTP();
    console.log(otp);
    // Check if the OTP is numeric and has a length of 6
    if (!/^\d{6}$/.test(otp)) {
      console.error(`Test failed for OTP: ${otp}`);
    }
  }
};

testGenerateOTP();
