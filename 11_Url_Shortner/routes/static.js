import { Router } from 'express';
import Url from '../models/url.js';
const myStaticRouter = new Router();

myStaticRouter.get('/', async (req, res) => {
  const allUrls = await Url.find({});
  res.render('home', { urls: allUrls });
});
export default myStaticRouter;
