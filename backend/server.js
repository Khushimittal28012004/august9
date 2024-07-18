import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Replace with your MongoDB connection string
const uri = 'your-mongodb-connection-string';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Career Interest Schema
const careerInterestSchema = new mongoose.Schema({
  email: { type: String, required: true },
  roles: [String],
  industries: [String],
  skills: [String],
  jobLocations: String,
});

const CareerInterest = mongoose.model('CareerInterest', careerInterestSchema);

// Get career interests for a user
app.get('/career-interests/:email', async (req, res) => {
  try {
    const careerInterest = await CareerInterest.findOne({ email: req.params.email });
    res.json(careerInterest);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching career interests', error });
  }
});

// Save or update career interests
app.post('/career-interests', async (req, res) => {
  const { email, roles, industries, skills, jobLocations } = req.body;

  try {
    let careerInterest = await CareerInterest.findOne({ email });

    if (careerInterest) {
      careerInterest.roles = roles;
      careerInterest.industries = industries;
      careerInterest.skills = skills;
      careerInterest.jobLocations = jobLocations;
    } else {
      careerInterest = new CareerInterest({ email, roles, industries, skills, jobLocations });
    }

    await careerInterest.save();
    res.status(200).json({ message: 'Career interests saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving career interests', error });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


