import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017/mydatabase'; // Replace with your actual URI

const connectDB = async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB database connection established successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

export default connectDB;
