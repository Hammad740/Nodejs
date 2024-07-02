const express = require('express');
const PORT = 5000;
const app = express();
const data = require('./data.json');

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
app.post('/api/users', (req, res) => {
  return res.json({ status: 'pending' });
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
