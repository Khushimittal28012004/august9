// lsof -i :5001
// kill -9 <PID>

import session from 'express-session';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './db.js';
import otpRoutes from './routes/otp.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

// CORS Configuration
const corsOptions = {
  origin:  `*`,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));


// Use OTP routes
app.use('/api', otpRoutes);

// Global variable to store the current port
// let currentPort = startPort;

// Simplified endpoint to get the current port
// app.get('/current-port', (req, res) => {
//   try {
//     console.log('Received request for current port');
//     res.json({ port: currentPort });
//   } catch (error) {
//     console.error('Error fetching current port:', error);
//     res.status(500).json({ message: 'Error fetching current port', error: error.message });
//   }
// });

// Database models (schemas)
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

//Login route
app.post('/login', async (req, res) =>{
  const {email, password} = req.body;

  console.log('Login Request:', req.body);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', userId: user._id });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});


const academicInfoSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  degreeProgram: String,
  major: String,
  graduationDate: String,
  previousDegrees: String,
});
const AcademicInfo = mongoose.model('AcademicInfo', academicInfoSchema);

const careerInterestsSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  preferredJobRoles: [String],
  industriesOfInterest: [String],
  skills: [String],
  preferredJobLocations: String,
});
const CareerInterests = mongoose.model('CareerInterests', careerInterestsSchema);

const previousExperienceSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  experience: String,
  employmentTitle: String,
});
const PreviousExperience = mongoose.model('PreviousExperience', previousExperienceSchema);

const additionalInformationSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  linkedin: String,
  portfolio: String,
  hobbies: String,
});
const AdditionalInformation = mongoose.model('AdditionalInformation', additionalInformationSchema);

// Endpoint to handle final form submission
app.post('/finalSubmit', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    degreeProgram,
    major,
    graduationDate,
    previousDegrees,
    preferredJobRoles,
    industriesOfInterest,
    skills,
    preferredJobLocations,
    experience,
    employmentTitle,
    linkedin,
    portfolio,
    hobbies,
  } = req.body;

  try {
    console.log('Received finalSubmit request with data:', req.body);
    
    let user = await User.findOne({ email });
    if (user) {
      console.log('Email already exists:', email);
      return res.status(400).json({ message: 'Email already exists' });
    }

    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();
    console.log('User created successfully:', newUser._id);

    const newAcademicInfo = new AcademicInfo({
      userId: newUser._id,
      degreeProgram,
      major,
      graduationDate,
      previousDegrees,
    });
    await newAcademicInfo.save();
    console.log('AcademicInfo created successfully:', newAcademicInfo._id);

    const newCareerInterests = new CareerInterests({
      userId: newUser._id,
      preferredJobRoles,
      industriesOfInterest,
      skills,
      preferredJobLocations,
    });
    await newCareerInterests.save();
    console.log('CareerInterests created successfully:', newCareerInterests._id);

    const newPreviousExperience = new PreviousExperience({
      userId: newUser._id,
      experience,
      employmentTitle,
    });
    await newPreviousExperience.save();
    console.log('PreviousExperience created successfully:', newPreviousExperience._id);

    const newAdditionalInformation = new AdditionalInformation({
      userId: newUser._id,
      linkedin,
      portfolio,
      hobbies,
    });
    await newAdditionalInformation.save();
    console.log('AdditionalInformation created successfully:', newAdditionalInformation._id);

    res.status(201).json({ message: 'User created successfully', userId: newUser._id });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).json({ message: 'Error creating user', error });
  }
});

// Placeholder route for testing
app.post('/items', (req, res) => {
  const item = req.body;
  res.status(201).send(item);
});

app.get('/current-port', (req, res) => {
  res.json({ port: PORT });
});

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log(`Server is running on port: ${PORT}`);
  }
});