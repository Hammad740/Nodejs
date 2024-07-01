import * as http from 'node:http';

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
    case 'DELETE':
      handleDeleteRequest(req, res);
      break;
    case 'PATCH':
      handlePatchRequest(req, res);
      break;
    case 'PUT':
      handlePutRequest(req, res);
      break;
    case 'HEAD':
      handleHeadRequest(req, res);
      break;
    case 'OPTIONS':
      handleOptionsRequest(req, res);
      break;
    default:
      res.statusCode = 405;
      res.end(JSON.stringify({ error: 'Method not allowed' }));
      break;
  }
});

const PORT = 4000;
server.listen(PORT, () => console.log(`Server is running on ${PORT}`));

function handleGetRequest(req, res) {
  res.statusCode = 200;
  res.end(JSON.stringify({ message: 'GET request received' }));
}

function handlePostRequest(req, res) {
  let body = '';
  req.on('data', (chunk) => (body += chunk.toString()));

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
  req.on('data', (chunk) => (body += chunk.toString()));

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
