import { nanoid } from 'nanoid';
import Url from '../models/url.js';

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: 'URL is required' });

  const shortId = nanoid(8);

  try {
    await Url.create({
      shortId,
      redirectUrl: body.url,
      visitHistory: [],
    });
    const urls = await Url.find({});
    res.render('home', { id: shortId, urls });
  } catch (error) {
    console.error('Error creating short URL:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export default handleGenerateNewShortURL;
