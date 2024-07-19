import express from 'express';
const app = express();
const PORT = 3000;
import urlRoute from './routes/url.js';
import connectToDatabase from './connect.js';
app.use('/url', urlRoute);

connectToDatabase('mongodb://localhost:27017/');
app.listen(PORT, () =>
  console.log(`Server is listening on ${PORT} successfully!`)
);
