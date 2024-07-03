import mongoose from 'mongoose';

await mongoose.connect('mongodb://localhost:27017/');

import express from 'express';
const app = express();
const PORT = 3000;

app.listen(PORT, () =>
  console.log(`Server is listening on ${PORT} successfully`)
);
