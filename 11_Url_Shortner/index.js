import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import urlRoute from './routes/url.js';
import connectToDatabase from './connect.js';
import Url from './models/url.js';

const app = express();
const PORT = 3000;

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

// Database connection (assuming connectToDatabase handles errors)
connectToDatabase('mongodb://localhost:27017/urlShortener');

// Mount routes
app.use('/url', urlRoute);

app.get('/url/:shortId', async (req, res) => {
  const shortId = req.params.shortId;
  try {
    const updatedEntry = await Url.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } }
    );

    if (!updatedEntry) {
      return res.status(404).send('URL not found');
    }

    res.redirect(updatedEntry.redirectUrl);
  } catch (error) {
    console.error('Error redirecting:', error);
    res.status(500).send('Internal server error');
  }
});

app.get('/testing', async (req, res) => {
  const allUrls = await Url.find({});
  res.render('home', { allUrls });
});

// Start the server
app.listen(PORT, () =>
  console.log(`Server is listening on ${PORT} successfully!`)
);
