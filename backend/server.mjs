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

app.use(cors());
app.use(express.json());

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
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  degreeProgram: String,
  major: String,
  graduationDate: String,
  previousDegrees: String
});

const AcademicInfo = mongoose.model('AcademicInfo', academicInfoSchema);

// Signup route
app.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = new User({ firstName, lastName, email, password });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', userId: newUser._id });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error });
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

    const academicInfo = await AcademicInfo.findOne({ userId: mongoose.Types.ObjectId(userId) });
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

  const newAcademicInfo = new AcademicInfo({ userId: trimmedUserId, degreeProgram, major, graduationDate, previousDegrees });

  try {
    await newAcademicInfo.save();
    res.status(201).json({ message: 'Academic info saved successfully' });
  } catch (error) {
    console.error('Error saving academic info:', error); // Log the full error
    res.status(400).json({ message: 'Error saving academic info', error: error.message || error });
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
