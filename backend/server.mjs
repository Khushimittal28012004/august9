import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './db.js';

dotenv.config();

const app = express();
const startPort = process.env.PORT || 5001;

connectDB();

app.use(express.json());

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

const academicInfoSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  degreeProgram: String,
  major: String,
  graduationDate: String,
  previousDegrees: String
});
const AcademicInfo = mongoose.model('AcademicInfo', academicInfoSchema);

const careerInterestsSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  preferredJobRoles: [String],
  industriesOfInterest: [String],
  skills: [String],
  preferredJobLocations: String
});
const CareerInterests = mongoose.model('CareerInterests', careerInterestsSchema);

const previousExperienceSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  experience: String,
  employmentTitle: String
});
const PreviousExperience = mongoose.model('PreviousExperience', previousExperienceSchema);

const additionalInformationSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  linkedin: String,
  portfolio: String,
  hobbies: String
});
const AdditionalInformation = mongoose.model('AdditionalInformation', additionalInformationSchema);

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
    hobbies
  } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();

    const newAcademicInfo = new AcademicInfo({
      userId: newUser._id,
      degreeProgram,
      major,
      graduationDate,
      previousDegrees
    });
    await newAcademicInfo.save();

    const newCareerInterests = new CareerInterests({
      userId: newUser._id,
      preferredJobRoles,
      industriesOfInterest,
      skills,
      preferredJobLocations
    });
    await newCareerInterests.save();

    const newPreviousExperience = new PreviousExperience({
      userId: newUser._id,
      experience,
      employmentTitle
    });
    await newPreviousExperience.save();

    const newAdditionalInformation = new AdditionalInformation({
      userId: newUser._id,
      linkedin,
      portfolio,
      hobbies
    });
    await newAdditionalInformation.save();

    res.status(201).json({ message: 'User created successfully', userId: newUser._id });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error });
  }
});

app.post('/items', (req, res) => {
  const item = req.body;
  res.status(201).send(item);
});

app.get('/current-port', (req, res) => {
  res.json({ port: currentPort });
});

let currentPort = startPort;

const startServer = (port) => {
  currentPort = port;
  const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use, trying another port...`);
      startServer(port + 1);
    } else {
      console.error(err);
    }
  });
};

startServer(startPort);
