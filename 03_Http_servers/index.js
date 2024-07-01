// import * as http from 'node:http';
// import * as fs from 'node:fs';
// import * as url from 'url';
// const myServer = http.createServer((req, res) => {
//   console.log('New request received');
//   //   console.log(req);
//   //   console.log(req.headers);
//   const log = `${Date.now().toLocaleString} new request received on : ${
//     req.url
//   }`;
//   ////legacy
//   // const myUrl = url.parse(req.url);
//   // console.log(myUrl);
//   const myURl = new URL(req.url);
//   fs.appendFile('log.txt', log, (err, data) => {
//     try {
//       //   console.log(data);
//       switch (req.url) {
//         case '/':
//           res.end('HomePage');
//           break;
//         case '/contact-us':
//           res.end('Contact us');
//           break;
//         default:
//           res.end('404 Not Found');
//           break;
//       }
//     } catch (error) {
//       console.log(err);
//     }
//   });
//   //   res.end('Hello from the server');
// });

// myServer.listen(3000, () => console.log('Server Started'));

import * as http from 'node:http';
import * as fs from 'node:fs';
import { URL } from 'url';

const myServer = http.createServer((req, res) => {
  console.log('New request received');

  // Create log entry
  const log = `${new Date().toLocaleString()} - New request received on: ${
    req.url
  }\n`;

  // Append log entry to log.txt
  fs.appendFile('log.txt', log, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });

  // Parse URL
  const myURL = new URL(req.url, `http://${req.headers.host}`);
  console.log(myURL);
  // Handle routes
  switch (myURL.pathname) {
    case '/':
      res.end('HomePage');
      break;
    case '/contact-us':
      res.end('Contact us');
      break;
    default:
      res.end('404 Not Found');
      break;
  }
});

myServer.listen(3000, () => console.log('Server Started'));
