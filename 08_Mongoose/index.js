import express from 'express';
import * as path from 'node:path';
import { fileURLToPath } from 'url';

const PORT = 3000;
const app = express();

// Get the current file's path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('main');
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} successfully`);
});
