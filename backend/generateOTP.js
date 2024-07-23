// import otpGenerator from 'otp-generator'; // install npm i otp-generator

// const generateOTP = () => {
//   const OTP = otpGenerator.generate(6, { 
//     digits: true,
//     alphabets: false,
//     upperCaseAlphabets: false, 
//     specialChars: false,
//   });

//   return OTP;
// };

// export default generateOTP;

const generateOTP = () => {
  // Generate a random number between 100000 and 999999
  const OTP = Math.floor(100000 + Math.random() * 900000);
  return OTP.toString(); // Convert to string if needed
};

export default generateOTP;

