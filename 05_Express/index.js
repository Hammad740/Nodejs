import express from 'express';

const PORT = 4000;
const app = express();
// Creates an Express application. The express() function is a top-level function exported by the express module.

app.get('/', (req, res) =>
  res.send(`Hello from home page and hello from ${req.query.name}`)
);
app.get('/about', (req, res) => res.send('Hello from about page'));

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
