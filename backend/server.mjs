import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './db.js'; // Import db.js to ensure the database connection

dotenv.config();

const app = express();
const startPort = process.env.PORT || 5001; // Start port, changeable if in use

// Connect to the database
connectDB();

app.use(express.json());

// Enhanced CORS configuration
const corsOptions = {
  origin: '*', // Specify the frontend origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};
app.use(cors(corsOptions));

// Define User Schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// Define Academic Info Schema
const academicInfoSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  degreeProgram: String,
  major: String,
  graduationDate: String,
  previousDegrees: String
});

const AcademicInfo = mongoose.model('AcademicInfo', academicInfoSchema);

// Define Career Interests Schema
const careerInterestsSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  preferredJobRoles: [String],
  industriesOfInterest: [String],
  skills: [String],
  preferredJobLocations: String
});

const CareerInterests = mongoose.model('CareerInterests', careerInterestsSchema);

// Signup route
app.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      user.firstName = firstName;
      user.lastName = lastName;
      user.password = password;
      await user.save();
      res.status(200).json({ message: 'User updated successfully', userId: user._id });
    } else {
      const newUser = new User({ firstName, lastName, email, password });
      await newUser.save();
      res.status(201).json({ message: 'User created successfully', userId: newUser._id });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error creating/updating user', error });
  }
});

// Update user route
app.put('/signup/:userId', async (req, res) => {
  const { userId } = req.params;
  const { firstName, lastName, email, password } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { firstName, lastName, email, password },
      { new: true }
    );
    if (updatedUser) {
      res.status(200).json({ message: 'User updated successfully', userId: updatedUser._id });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error updating user', error });
  }
});

// Fetch Sign-up Info route
app.get('/signup/:userId', async (req, res) => {
  try {
    const userId = req.params.userId.trim(); // Trim any extraneous whitespace or newline characters
    console.log(`Fetching sign-up info for userId: "${userId}"`); // Log userId

    // Check if userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      console.error(`Invalid userId format: "${userId}"`);
      return res.status(400).json({ message: 'Invalid userId format' });
    }

    const user = await User.findById(new mongoose.Types.ObjectId(userId));
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching sign-up info:', error); // Log the full error
    res.status(500).json({ message: 'Error fetching sign-up info', error });
  }
});

// Fetch Academic Info route
app.get('/academic-info/:userId', async (req, res) => {
  try {
    const userId = req.params.userId.trim(); // Trim any extraneous whitespace or newline characters
    console.log(`Fetching academic info for userId: "${userId}"`); // Log userId

    // Check if userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      console.error(`Invalid userId format: "${userId}"`);
      return res.status(400).json({ message: 'Invalid userId format' });
    }

    const academicInfo = await AcademicInfo.findOne({ userId: new mongoose.Types.ObjectId(userId) });
    if (academicInfo) {
      res.status(200).json(academicInfo);
    } else {
      res.status(404).json({ message: 'Academic info not found' });
    }
  } catch (error) {
    console.error('Error fetching academic info:', error); // Log the full error
    res.status(500).json({ message: 'Error fetching academic info', error });
  }
});

// Save Academic Info route
app.post('/academic-info', async (req, res) => {
  const { userId, degreeProgram, major, graduationDate, previousDegrees } = req.body;
  const trimmedUserId = userId.trim(); // Trim the userId

  // Check if trimmedUserId is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(trimmedUserId)) {
    console.error(`Invalid userId format: "${trimmedUserId}"`);
    return res.status(400).json({ message: 'Invalid userId format' });
  }

  const newAcademicInfo = new AcademicInfo({
    userId: new mongoose.Types.ObjectId(trimmedUserId),
    degreeProgram,
    major,
    graduationDate,
    previousDegrees
  });

  try {
    await newAcademicInfo.save();
    res.status(201).json({ message: 'Academic info saved successfully' });
  } catch (error) {
    console.error('Error saving academic info:', error); // Log the full error
    res.status(400).json({ message: 'Error saving academic info', error: error.message || error });
  }
});

// Fetch Career Interests route
app.get('/career-interests/:userId', async (req, res) => {
  try {
    const userId = req.params.userId.trim(); // Trim any extraneous whitespace or newline characters
    console.log(`Fetching career interests for userId: "${userId}"`); // Log userId

    // Check if userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      console.error(`Invalid userId format: "${userId}"`);
      return res.status(400).json({ message: 'Invalid userId format' });
    }

    const careerInterests = await CareerInterests.findOne({ userId: new mongoose.Types.ObjectId(userId) });
    if (careerInterests) {
      res.status(200).json(careerInterests);
    } else {
      res.status(404).json({ message: 'Career interests not found' });
    }
  } catch (error) {
    console.error('Error fetching career interests:', error); // Log the full error
    res.status(500).json({ message: 'Error fetching career interests', error });
  }
});

// Save Career Interests route
app.post('/career-interests', async (req, res) => {
  const { userId, preferredJobRoles, industriesOfInterest, skills, preferredJobLocations } = req.body;
  const trimmedUserId = userId.trim(); // Trim the userId

  // Check if trimmedUserId is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(trimmedUserId)) {
    console.error(`Invalid userId format: "${trimmedUserId}"`);
    return res.status(400).json({ message: 'Invalid userId format' });
  }

  const newCareerInterests = new CareerInterests({
    userId: new mongoose.Types.ObjectId(trimmedUserId),
    preferredJobRoles,
    industriesOfInterest,
    skills,
    preferredJobLocations
  });

  try {
    await newCareerInterests.save();
    res.status(201).json({ message: 'Career interests saved successfully' });
  } catch (error) {
    console.error('Error saving career interests:', error); // Log the full error
    res.status(400).json({ message: 'Error saving career interests', error: error.message || error });
  }
});

// New route to get the current port
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

// Start the server on the initial port
startServer(startPort);
