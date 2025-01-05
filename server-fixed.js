const express = require('express');
const app = express();

// Increase the request body size limit
app.use(express.json({ limit: '50mb' })); // Adjust limit as needed

app.post('/users', (req, res) => {
  // Assume 'users' is an in-memory array for simplicity
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// ... other routes

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});