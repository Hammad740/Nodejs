const express = require('express');
const PORT = 5000;
const app = express();
const data = require('./data.json');
const fs = require('node:fs');
//? middleware

// Routes
app.get('/api/users', (req, res) => {
  return res.json(data);
});
app
  .get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);

    const currentUser = data.find((user) => user.user_id === id);
    return res.json(currentUser);
  })
  .put((req, res) => {})
  .delete((req, res) => {});

//todo : create a new user
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

// POST request to create a new user
app.post('/api/users', (req, res) => {
  const newUser = req.body; // Assuming req.body contains the new user data
  console.log('Received new user:', newUser);

  // Logic to save newUser to data.json or a database would go here

  data.push(newUser);
  fs.writeFile('./data.json', JSON.stringify(data), (err, data) => {
    return res.json({ status: 'pending' });
  });

  //   // Example response
  //   return res.json({ status: 'User created successfully', user: newUser });
});

app.get('/users', (req, res) => {
  const html = `
    
    <ul>
      ${data.map((user) => `<li>${user.username}</li>`).join('')}
    </ul>`;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} successfully`);
});
