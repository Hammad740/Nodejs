import * as http from 'node:http';
import * as fs from 'node:fs';
const myServer = http.createServer((req, res) => {
  console.log('New request received');
  //   console.log(req);
  //   console.log(req.headers);
  const log = `${Date.now().toLocaleString} new request recieved on : ${
    req.url
  }`;
  fs.appendFile('log.txt', log, (err, data) => {
    try {
      //   console.log(data);
      switch (req.url) {
        case '/':
          res.end('HomePage');
        case '/contact-us':
          res.end('Contact us');
      }
    } catch (error) {
      console.log(err);
    }
  });
  //   res.end('Hello from the server');
});

myServer.listen(3000, () => console.log('Server Started'));
