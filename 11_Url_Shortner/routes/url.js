import { Router } from 'express';
import handleGenerateNewShortURL from '../controllers/url.js';

const urlRouter = new Router();

urlRouter.post('/', handleGenerateNewShortURL);

export default urlRouter;
