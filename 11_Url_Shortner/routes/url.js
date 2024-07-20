import { Router } from 'express'; // Import Router class directly

const myRouter = new Router(); // Use a different name for the router instance

// Import your handleGenerateNewShortURL function
import handleGenerateNewShortURL from '../controllers/url.js';

// Define the route to generate a new short URL
myRouter.post('/', handleGenerateNewShortURL);

export default myRouter;
