import mongoose from 'mongoose';
async function connectToDatabase(url) {
  try {
    await mongoose.connect(url);
    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
export default connectToDatabase;
// mongodb://localhost:27017/urlShortner/urls
