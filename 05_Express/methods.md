In Express.js, the `req` (request) and `res` (response) objects are integral to handling HTTP requests and responses. These objects provide numerous methods and properties that allow you to interact with client requests and send appropriate responses. Here's a detailed look at some of the commonly used `req` and `res` methods.

### `req` (Request) Object

The `req` object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and more.

#### Common `req` Properties

1. **`req.query`**

   - Contains the query string parameters from the URL.
   - Example: For the URL `/search?term=express`, `req.query.term` would be `'express'`.

2. **`req.params`**

   - Contains route parameters (named URL segments).
   - Example: For the route `/user/:id`, if the URL is `/user/123`, `req.params.id` would be `'123'`.

3. **`req.body`**

   - Contains data sent in the body of the request (useful for POST and PUT requests).
   - Requires body-parsing middleware like `express.json()` or `express.urlencoded()`.
   - Example: For a JSON body `{"name": "John"}`, `req.body.name` would be `'John'`.

4. **`req.headers`**

   - Contains the headers sent by the client.
   - Example: `req.headers['user-agent']` gives the user-agent string of the client.

5. **`req.method`**

   - Contains the HTTP method of the request (e.g., GET, POST).
   - Example: `req.method` might be `'GET'`.

6. **`req.url`**
   - Contains the full URL of the request.
   - Example: For the URL `/search?term=express`, `req.url` would be `'/search?term=express'`.

#### Common `req` Methods

1. **`req.get(headerName)`**

   - Returns the value of the specified HTTP header.
   - Example: `req.get('Content-Type')` might return `'application/json'`.

2. **`req.is(type)`**
   - Checks if the request's Content-Type matches the specified `type`.
   - Example: `req.is('json')` returns `true` if the Content-Type is `'application/json'`.

### `res` (Response) Object

The `res` object represents the HTTP response that an Express app sends when it gets an HTTP request.

#### Common `res` Methods

1. **`res.send(body)`**

   - Sends a response of various types, such as a string, an object, or a buffer.
   - Example: `res.send('Hello World')` sends a plain text response.

2. **`res.json(obj)`**

   - Sends a JSON response.
   - Example: `res.json({ message: 'Hello World' })` sends a JSON response `{"message": "Hello World"}`.

3. **`res.status(code)`**

   - Sets the HTTP status code for the response.
   - Example: `res.status(404).send('Not Found')` sets the status to 404 and sends the string `'Not Found'`.

4. **`res.sendFile(path, [options], [callback])`**

   - Sends a file as an octet stream.
   - Example: `res.sendFile('/path/to/file')` sends the specified file.

5. **`res.redirect([status], path)`**

   - Redirects the client to a different URL.
   - Example: `res.redirect('/new-path')` or `res.redirect(301, '/new-path')` for a permanent redirect.

6. **`res.render(view, [locals], callback)`**

   - Renders a view template.
   - Example: `res.render('index', { title: 'Home' })` renders the `index` view with the local variable `title` set to `'Home'`.

7. **`res.set(field, [value])`**

   - Sets the response's HTTP header field to the specified value.
   - Example: `res.set('Content-Type', 'text/html')`.

8. **`res.cookie(name, value, [options])`**

   - Sets a cookie in the response.
   - Example: `res.cookie('name', 'value', { httpOnly: true })`.

9. **`res.clearCookie(name, [options])`**

   - Clears the cookie specified by `name`.
   - Example: `res.clearCookie('name')`.

10. **`res.end([data], [encoding])`**
    - Ends the response process.
    - Example: `res.end()` or `res.end('Done')`.

### Example

Here's an example that uses some of the `req` and `res` methods:

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

app.post('/user', (req, res) => {
  const userName = req.body.name;
  res.json({ message: `User ${userName} created` });
});

app.get('/search', (req, res) => {
  const searchTerm = req.query.term;
  res.send(`Search Term: ${searchTerm}`);
});

app.get('/file', (req, res) => {
  res.sendFile('/path/to/file');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

In this example, we handle various types of requests and demonstrate how to use different methods of the `req` and `res` objects to interact with and respond to those requests.
