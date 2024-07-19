import { Router as router } from 'express';
import handleGenerateNewShortURL from '../controllers/url.js';
router.post('/', handleGenerateNewShortURL);

export default router;
