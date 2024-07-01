### HTTP Methods

HTTP methods are standardized request types that indicate the desired action to be performed on the server. The most common HTTP methods include:

1. **GET**: Retrieves data from the server.
2. **POST**: Submits data to the server to create a new resource.
3. **PUT**: Updates an existing resource on the server.
4. **DELETE**: Deletes a resource from the server.
5. **PATCH**: Partially updates an existing resource.
6. **HEAD**: Retrieves metadata from the server (headers only, no body).
7. **OPTIONS**: Describes the communication options for the target resource.

### Using HTTP Methods in Node.js

In Node.js, the `http` module is used to create a server that can handle different HTTP methods. Here's how you can handle each of these methods:

#### Creating a Basic HTTP Server

First, let's create a basic HTTP server:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  res.setHeader('Content-Type', 'application/json');

  switch (method) {
    case 'GET':
      handleGetRequest(req, res);
      break;
    case 'POST':
      handlePostRequest(req, res);
      break;
    case 'PUT':
      handlePutRequest(req, res);
      break;
    case 'DELETE':
      handleDeleteRequest(req, res);
      break;
    case 'PATCH':
      handlePatchRequest(req, res);
      break;
    case 'HEAD':
      handleHeadRequest(req, res);
      break;
    case 'OPTIONS':
      handleOptionsRequest(req, res);
      break;
    default:
      res.statusCode = 405;
      res.end(JSON.stringify({ error: 'Method Not Allowed' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

function handleGetRequest(req, res) {
  res.statusCode = 200;
  res.end(JSON.stringify({ message: 'GET request received' }));
}

function handlePostRequest(req, res) {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  req.on('end', () => {
    res.statusCode = 201;
    res.end(
      JSON.stringify({
        message: 'POST request received',
        data: JSON.parse(body),
      })
    );
  });
}

function handlePutRequest(req, res) {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  req.on('end', () => {
    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: 'PUT request received',
        data: JSON.parse(body),
      })
    );
  });
}

function handleDeleteRequest(req, res) {
  res.statusCode = 200;
  res.end(JSON.stringify({ message: 'DELETE request received' }));
}

function handlePatchRequest(req, res) {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  req.on('end', () => {
    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: 'PATCH request received',
        data: JSON.parse(body),
      })
    );
  });
}

function handleHeadRequest(req, res) {
  res.statusCode = 200;
  res.end();
}

function handleOptionsRequest(req, res) {
  res.statusCode = 204;
  res.setHeader('Allow', 'GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS');
  res.end();
}
```

### Explanation

1. **Creating the Server:**

   - The `http.createServer()` method creates a new HTTP server instance.
   - The server listens on port 3000 and logs a message when it starts.

2. **Handling Different HTTP Methods:**

   - The `req.method` property is used to determine the HTTP method of the incoming request.
   - Based on the HTTP method, the server calls the appropriate handler function.

3. **Handler Functions:**
   - **GET:** Responds with a JSON message indicating a GET request.
   - **POST:** Collects data from the request body, parses it, and responds with the data.
   - **PUT:** Similar to POST, but typically used to update existing resources.
   - **DELETE:** Responds with a message indicating a DELETE request.
   - **PATCH:** Collects data from the request body, parses it, and responds with the data, typically used for partial updates.
   - **HEAD:** Responds with headers only, no body content.
   - **OPTIONS:** Responds with the allowed HTTP methods.
