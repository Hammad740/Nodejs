import express from 'express';
const app = express();
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import cookieParser from 'cookie-parser';
app.use(express.json());
//// This middleware is used to parse incoming requests with JSON payloads.
app.use(express.urlencoded({ extended: true }));
////  This middleware is used to parse incoming requests with URL-encoded payloads (typically from HTML form submissions)
app.use(cookieParser());
app.set('view engine', 'ejs');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { message: 'This is the message' });
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server is listening on ${PORT} successfully.`)
);

// // Setting a cookie
// app.get('/set-cookie', (req, res) => {
//   res.cookie('user', 'John Doe', { maxAge: 900000, httpOnly: true });
//   res.send('Cookie is set');
// });

// // Reading a cookie
// app.get('/get-cookie', (req, res) => {
//   const user = req.cookies['user'];
//   res.send(`User is ${user}`);
// });
