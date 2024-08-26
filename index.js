const express = require('express');

const app = express();

// GET request to the root endpoint
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// GET request to the /about endpoint
app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

// POST request to the /login endpoint
app.post('/login', (req, res) => {
    // Handle login logic here
    res.send('Login successful!');
});

// PUT request to the /users/:id endpoint
app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Update user logic here
    res.send(`User ${userId} updated successfully!`);
});

// DELETE request to the /users/:id endpoint
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Delete user logic here
    res.send(`User ${userId} deleted successfully!`);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});