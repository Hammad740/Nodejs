### URL Parsing in Node.js

URL parsing involves breaking down a URL into its individual components, such as the protocol, hostname, port, pathname, query string, and fragment identifier. This allows for easy manipulation and extraction of specific parts of the URL.

### Using the `URL` Class in Modern Node.js

In modern versions of Node.js, you can use the `URL` class from the `url` module, which provides a standardized way to work with URLs. This approach is consistent with the URL API in browsers and provides a more robust and intuitive interface.

#### Importing the `URL` Class

First, you need to import the `URL` class from the `url` module:

```javascript
const { URL } = require('url');
```

#### Parsing a URL

To parse a URL, you can create a new `URL` instance. Here is how you can do it:

```javascript
const myURL = new URL('http://example.com:8080/pathname/?search=test#hash');
```

#### Accessing URL Components

Once you have a `URL` object, you can easily access its various components:

```javascript
console.log(myURL.protocol); // 'http:'
console.log(myURL.hostname); // 'example.com'
console.log(myURL.port); // '8080'
console.log(myURL.pathname); // '/pathname/'
console.log(myURL.search); // '?search=test'
console.log(myURL.searchParams.get('search')); // 'test'
console.log(myURL.hash); // '#hash'
```

#### Modifying URL Components

You can also modify components of the URL:

```javascript
myURL.pathname = '/newpath';
myURL.searchParams.append('key', 'value');

console.log(myURL.toString()); // 'http://example.com:8080/newpath/?search=test&key=value#hash'
```

#### Example: URL Parsing in an HTTP Server

Here’s an example of how you can use URL parsing in a simple HTTP server to handle different routes and query parameters:

```javascript
const http = require('http');
const { URL } = require('url');

const server = http.createServer((req, res) => {
  // Parse the URL of the incoming request
  const myURL = new URL(req.url, `http://${req.headers.host}`);

  // Log the parsed URL components
  console.log(`Pathname: ${myURL.pathname}`);
  console.log(`Search Params: ${myURL.searchParams}`);

  // Handle different routes
  switch (myURL.pathname) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('HomePage');
      break;
    case '/contact-us':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Contact us');
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      break;
  }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}/`)
);
```

### Key Points

- **`URL` Class:** Provides a standardized and robust way to parse and manipulate URLs.
- **Accessing Components:** Easily access individual components of the URL like protocol, hostname, pathname, search parameters, etc.
- **Modifying Components:** Modify URL components directly and reassemble the URL.
- **Consistency with Browsers:** The `URL` class in Node.js is consistent with the URL API available in web browsers, making it easier for developers to work across different environments.

By using the `URL` class in Node.js, you can efficiently parse, manipulate, and work with URLs in your applications, leveraging a modern and standardized API.### URL Parsing in Node.js

URL parsing involves breaking down a URL into its individual components, such as the protocol, hostname, port, pathname, query string, and fragment identifier. This allows for easy manipulation and extraction of specific parts of the URL.

### Using the `URL` Class in Modern Node.js

In modern versions of Node.js, you can use the `URL` class from the `url` module, which provides a standardized way to work with URLs. This approach is consistent with the URL API in browsers and provides a more robust and intuitive interface.

#### Importing the `URL` Class

First, you need to import the `URL` class from the `url` module:

```javascript
const { URL } = require('url');
```

#### Parsing a URL

To parse a URL, you can create a new `URL` instance. Here is how you can do it:

```javascript
const myURL = new URL('http://example.com:8080/pathname/?search=test#hash');
```

#### Accessing URL Components

Once you have a `URL` object, you can easily access its various components:

```javascript
console.log(myURL.protocol); // 'http:'
console.log(myURL.hostname); // 'example.com'
console.log(myURL.port); // '8080'
console.log(myURL.pathname); // '/pathname/'
console.log(myURL.search); // '?search=test'
console.log(myURL.searchParams.get('search')); // 'test'
console.log(myURL.hash); // '#hash'
```

#### Modifying URL Components

You can also modify components of the URL:

```javascript
myURL.pathname = '/newpath';
myURL.searchParams.append('key', 'value');

console.log(myURL.toString()); // 'http://example.com:8080/newpath/?search=test&key=value#hash'
```

#### Example: URL Parsing in an HTTP Server

Here’s an example of how you can use URL parsing in a simple HTTP server to handle different routes and query parameters:

```javascript
const http = require('http');
const { URL } = require('url');

const server = http.createServer((req, res) => {
  // Parse the URL of the incoming request
  const myURL = new URL(req.url, `http://${req.headers.host}`);

  // Log the parsed URL components
  console.log(`Pathname: ${myURL.pathname}`);
  console.log(`Search Params: ${myURL.searchParams}`);

  // Handle different routes
  switch (myURL.pathname) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('HomePage');
      break;
    case '/contact-us':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Contact us');
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      break;
  }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}/`)
);
```

### Key Points

- **`URL` Class:** Provides a standardized and robust way to parse and manipulate URLs.
- **Accessing Components:** Easily access individual components of the URL like protocol, hostname, pathname, search parameters, etc.
- **Modifying Components:** Modify URL components directly and reassemble the URL.
- **Consistency with Browsers:** The `URL` class in Node.js is consistent with the URL API available in web browsers, making it easier for developers to work across different environments.

By using the `URL` class in Node.js, you can efficiently parse, manipulate, and work with URLs in your applications, leveraging a modern and standardized API.
