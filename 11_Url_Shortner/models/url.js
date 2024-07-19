import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  redirectUrl: {
    type: String,
    required: true,
  },
  visitHistory: [
    {
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

// Add timestamps: true as the second argument to mongoose.model
export default mongoose.model('Url', urlSchema, true);
