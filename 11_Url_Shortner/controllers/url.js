import { nanoid } from 'nanoid';
import Url from '../models/url.js';

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: 'url is required' });
  const shortId = nanoid(8);
  await Url.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortId });
}
export default handleGenerateNewShortURL;
