import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());
// Import routes and connection function
import urlRoute from './routes/url.js';
import connectToDatabase from './connect.js';
import Url from './models/url.js';

// Database connection (assuming connectToDatabase handles errors)
connectToDatabase('mongodb://localhost:27017/urlShortener');

// Mount routes
app.use('/url', urlRoute);
app.get('/:shortId', async (req, res) => {
  const shortId = req.params.shortId;
  try {
    const updatedEntry = await Url.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } }
    );

    if (!updatedEntry) {
      return res.status(404).send('URL not found'); // Handle not found case
    }

    res.redirect(updatedEntry.redirectUrl);
  } catch (error) {
    console.error('Error redirecting:', error);
    res.status(500).send('Internal server error'); // Handle generic error
  }
});

// Start the server
app.listen(PORT, () =>
  console.log(`Server is listening on ${PORT} successfully!`)
);
