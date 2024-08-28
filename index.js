const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

app.post('/login', (req, res) => {
    res.send('Login successful!');
});

app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ${userId} updated successfully!`);
});

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ${userId} deleted successfully!`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
