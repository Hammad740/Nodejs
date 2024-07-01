import * as http from 'node:http';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader = ('Content-Type', 'application/json');

  //// response body
  res.write(
    JSON.stringify({
      message: 'Hello, World!',
      status: 'success',
    })
  );

  res.end();
});

const PORT = 3000;
server.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
