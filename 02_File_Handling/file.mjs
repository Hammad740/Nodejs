import * as fs from 'node:fs';

//// synchronous call
fs.writeFileSync('./test.txt', 'hey there');

//// asynchronous call

fs.writeFile('./test2.txt', 'hey there from asynchronous call', (err) => {
  console.log('Error', err);
});

//// read synchronously

const result = fs.readFileSync('./contact.txt', 'utf-8');
console.log(result);

//// read asynchronously

fs.readFile('./contact.txt', 'utf-8', (err, data) => {
  console.log(data);
});

//// append file

fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString());
fs.appendFileSync('./test2.txt', 'Hey there\n');

fs.copyFileSync('test.txt', 'copy.txt');

const stat = fs.statSync('./contact.txt');
console.log(stat);
