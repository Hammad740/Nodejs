import express from 'express';
import * as fs from 'node:fs';
import { get } from 'node:http';
const app = express();
const PORT = 5000;

// middleware to parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// read and write the data
const getData = () => JSON.parse(fs.readFileSync('./socialmedia.json'));
const saveData = (data) =>
  fs.writeFileSync('./socialmedia.json', JSON.stringify(data, null, 2));

// put to update a user by id
app.put('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const data = getData();
  const index = data.findIndex((user) => user.user_id == id);
  if (index !== -1) {
    const updatedUser = { ...data[index], ...req.body };
    data[index] = updatedUser;
    saveData(data);
    res.json({ message: 'User updated successfully', user: updatedUser });
  } else {
    res.status(404).json({ message: 'User not found.' });
  }
});

// delete a user
app.delete('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const data = getData();
  const newData = data.filter((user) => user.user_id !== id);

  if (newData.length !== data.length) {
    saveData(newData);
    res.json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// GET all users
app.get('/api/users', (req, res) => {
  const data = getData();
  res.json(data);
});

// GET a specific user by ID
app.get('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const data = getData();
  const user = data.find((user) => user.user_id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// POST to create a new user
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  const data = getData();
  newUser.user_id = data.length ? data[data.length - 1].user_id + 1 : 1;
  data.push(newUser);
  saveData(data);
  res.status(201).json({ message: 'User created successfully', user: newUser });
});
app.listen(PORT, () =>
  console.log(`Server is running on ${PORT} successfully.`)
);
