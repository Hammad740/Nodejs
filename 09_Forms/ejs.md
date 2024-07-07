EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript. It is commonly used in Express.js applications to render dynamic web pages. Here's a beginner's guide to using EJS in an Express application.

### What is EJS?

EJS stands for Embedded JavaScript templating. It allows you to embed JavaScript code within your HTML to dynamically generate content. This is useful for creating HTML templates that can be populated with data from your server.

### Why Use EJS?

- **Simple Syntax**: EJS syntax is easy to learn and use, making it a good choice for beginners.
- **Integration with Express**: EJS integrates seamlessly with Express.js.
- **Reusable Components**: You can create reusable components (partials) to avoid duplication of code.

### Setting Up EJS in an Express Application

1. **Install Express and EJS**:
   First, create a new project directory and initialize a new Node.js project:

   ```sh
   mkdir myapp
   cd myapp
   npm init -y
   ```

   Then, install Express and EJS:

   ```sh
   npm install express ejs
   ```

2. **Set Up Express and EJS**:
   Create a basic Express server and configure it to use EJS as the templating engine:

   ```javascript
   const express = require('express');
   const app = express();

   // Set the view engine to EJS
   app.set('view engine', 'ejs');

   // Define a route
   app.get('/', (req, res) => {
     res.render('index', { title: 'Home', message: 'Hello, EJS!' });
   });

   // Start the server
   app.listen(3000, () => {
     console.log('Server is running on http://localhost:3000');
   });
   ```

3. **Create EJS Templates**:
   Create a `views` directory in your project root. Inside the `views` directory, create an `index.ejs` file:

   ```
   myapp
   ├── views
   │   └── index.ejs
   ├── node_modules
   ├── package.json
   └── server.js
   ```

   Add the following content to `index.ejs`:

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title><%= title %></title>
     </head>
     <body>
       <h1><%= message %></h1>
     </body>
   </html>
   ```

4. **Run Your Application**:
   Start your Express server by running the following command:

   ```sh
   node server.js
   ```

   Open your browser and navigate to `http://localhost:3000`. You should see the message "Hello, EJS!" displayed on the page.

### EJS Syntax and Features

1. **Embedding JavaScript**:

   - Use `<%= %>` to embed JavaScript expressions that should be output to the HTML.
   - Use `<% %>` for JavaScript code that does not produce output (e.g., loops, conditionals).

   ```html
   <h1><%= message %></h1>
   <% if (user) { %>
   <p>Welcome, <%= user.name %>!</p>
   <% } else { %>
   <p>Please log in.</p>
   <% } %>
   ```

2. **Including Partials**:
   Partials are reusable pieces of EJS templates. Create a `partials` directory inside `views` and add a partial, e.g., `header.ejs`:

   ```html
   <!-- views/partials/header.ejs -->
   <header>
     <h1>My Website</h1>
   </header>
   ```

   Include the partial in your main template using `<%- %>`:

   ```html
   <!-- views/index.ejs -->
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title><%= title %></title>
     </head>
     <body>
       <%- include('partials/header') %>
       <h1><%= message %></h1>
     </body>
   </html>
   ```

3. **Passing Data to Templates**:
   When rendering a template, you can pass an object containing the data you want to include in the template:

   ```javascript
   app.get('/about', (req, res) => {
     res.render('about', {
       title: 'About',
       content: 'This is the about page.',
     });
   });
   ```

   Create the corresponding `about.ejs` file:

   ```html
   <!-- views/about.ejs -->
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title><%= title %></title>
     </head>
     <body>
       <h1>About</h1>
       <p><%= content %></p>
     </body>
   </html>
   ```

### Conclusion

EJS is a powerful and easy-to-use templating engine for Express.js applications. By following the steps above, you can set up EJS in your Express project, create dynamic templates, and use EJS features like JavaScript embedding and partials to build robust web applications.
