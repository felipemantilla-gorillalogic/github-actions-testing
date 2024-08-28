/**
 * Express application instance.
 * @type {import('express').Express}
 */
const express = require('express');

const app = express();

/**
 * Route handler for the root path.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

/**
 * Route handler for the about page.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */
app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

/**
 * Route handler for the login endpoint.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */
app.post('/login', (req, res) => {
    res.send('Login successful!');
});

/**
 * Route handler for updating a user.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */
app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ${userId} updated successfully!`);
});

/**
 * Route handler for deleting a user.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ${userId} deleted successfully!`);
});

/**
 * Start the Express server.
 * @param {number} port - The port number to listen on.
 * @param {Function} callback - The function to call when the server starts listening.
 */
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});