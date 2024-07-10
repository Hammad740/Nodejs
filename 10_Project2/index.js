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

/// get all users
app.get('/api/users', (req, res) => {
  const data = getData();
  res.json(data);
});

// get a specific user by id
app.get('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const data = getData();
  const user = data.find((user) => user.user_id == id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found.' });
  }
});

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

Here is the updated RESTful API that allows you to get, post, put, and delete users with the given JSON data. We'll use Express.js to set up the server and handle the requests.

Create the data.json file with the provided data:
json
Copy code
[
  {
    "user_id": 1,
    "username": "rkeer0",
    "full_name": "Robbert Keer",
    "birthdate": "12/3/1982",
    "location": "Miami",
    "bio": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    "profile_pic": "https://robohash.org/quiadebitisillo.png?size=50x50&set=set1",
    "followers_count": 412135,
    "is_verified": true,
    "join_date": "4/9/2011"
  },
  {
    "user_id": 2,
    "username": "maxton1",
    "full_name": "Midge Axton",
    "birthdate": "9/15/1988",
    "location": "New York",
    "bio": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    "profile_pic": "https://robohash.org/aliasutreiciendis.png?size=50x50&set=set1",
    "followers_count": 427432,
    "is_verified": false,
    "join_date": "10/19/2020"
  },
  {
    "user_id": 3,
    "username": "hsinkin2",
    "full_name": "Hunter Sinkin",
    "birthdate": "10/14/2002",
    "location": "Miami",
    "bio": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "profile_pic": "https://robohash.org/adolorestempore.png?size=50x50&set=set1",
    "followers_count": 542945,
    "is_verified": false,
    "join_date": "3/5/2012"
  },
  {
    "user_id": 4,
    "username": "ptomisch3",
    "full_name": "Peyton Tomisch",
    "birthdate": "4/22/1985",
    "location": "New York",
    "bio": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    "profile_pic": "https://robohash.org/nequeipsamillo.png?size=50x50&set=set1",
    "followers_count": 935074,
    "is_verified": true,
    "join_date": "3/31/2015"
  },
  {
    "user_id": 5,
    "username": "cklimecki4",
    "full_name": "Callida Klimecki",
    "birthdate": "3/15/1987",
    "location": "Chicago",
    "bio": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    "profile_pic": "https://robohash.org/autconsequatureum.png?size=50x50&set=set1",
    "followers_count": 147711,
    "is_verified": true,
    "join_date": "9/21/2020"
  }
]
Create the Express server (index.js):
javascript
Copy code
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 5000;

// Middleware to parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Read and write data from/to data.json
const getData = () => JSON.parse(fs.readFileSync('./data.json'));
const saveData = (data) => fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));

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
