Express.js is a fast, unopinionated, and minimalist web framework for Node.js. It simplifies the process of building web applications and APIs. Here are the basics to get you started:

### 1. Setting Up Express

First, ensure you have Node.js installed. Then, create a new directory for your project, navigate into it, and initialize a new Node.js project:

```bash
mkdir my-express-app
cd my-express-app
npm init -y
```

Install Express:

```bash
npm install express
```

### 2. Creating a Basic Express Server

Create a file named `app.js` and add the following code:

```javascript
const express = require('express'); // Import Express
const app = express(); // Create an Express application
const PORT = 3000; // Define the port the server will listen on

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

Run the server:

```bash
node app.js
```

Visit `http://localhost:3000` in your browser, and you should see "Hello, World!".

### 3. Basic Routing

Express allows you to define routes for different HTTP methods and URL paths.

```javascript
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.post('/submit', (req, res) => {
  res.send('Form Submitted');
});

app.put('/update', (req, res) => {
  res.send('Update Page');
});

app.delete('/delete', (req, res) => {
  res.send('Delete Page');
});
```

### 4. Middleware

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. Middleware can execute code, modify the request and response objects, end the request-response cycle, and call the next middleware function.

```javascript
// A simple middleware function
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Built-in middleware to serve static files
app.use(express.static('public'));
```

### 5. Handling JSON and URL-encoded Data

Express provides built-in middleware to handle JSON and URL-encoded form data.

```javascript
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
```

### 6. Error Handling

You can define error-handling middleware by defining middleware functions with four arguments.

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

### 7. Organizing Routes

For larger applications, you can organize your routes using Express Router.

```javascript
const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Home Page');
});

router.get('/about', (req, res) => {
  res.send('About Page');
});

app.use('/', router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### Example Project Structure

For a more structured project, you might organize your files like this:

```
my-express-app/
├── app.js
├── package.json
├── routes/
│   └── index.js
└── public/
    └── index.html
```

**app.js:**

```javascript
const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

**routes/index.js:**

```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.get('/about', (req, res) => {
  res.send('About Page');
});

module.exports = router;
```

### Summary

- **Setting Up Express:** Install and initialize a new Express project.
- **Creating a Basic Server:** Define a basic server that listens for requests.
- **Routing:** Define routes for different HTTP methods and URL paths.
- **Middleware:** Use middleware functions for processing requests.
- **Handling Data:** Use built-in middleware for parsing JSON and URL-encoded data.
- **Error Handling:** Define error-handling middleware.
- **Organizing Routes:** Use `express.Router` to organize routes in separate files.

Express.js simplifies the process of building web applications and APIs with Node.js, providing a robust set of features for handling various web development tasks.
