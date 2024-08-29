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
 * Array of mock users.
 */
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
    { id: 3, username: 'user3', password: 'password3' }
];

/**
 * Route handler for the login endpoint.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find the user with the provided username and password
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.send('Login successful!');
    } else {
        res.status(401).send('Invalid username or password');
    }
});

/**
 * Route handler for the register endpoint.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Check if the username is already taken
    const existingUser = users.find(u => u.username === username);

    if (existingUser) {
        res.status(409).send('Username already taken');
    } else {
        // Generate a unique ID for the new user
        const id = users.length + 1;

        // Create the new user object
        const newUser = { id, username, password };

        // Add the new user to the array of users
        users.push(newUser);

        res.send('Registration successful!');
    }
});

/**
 * Route handler for updating a user.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */
app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const { username, password } = req.body;

    // Find the user with the provided ID
    const user = users.find(u => u.id === parseInt(userId));

    if (user) {
        // Update the user's username and password
        user.username = username;
        user.password = password;

        res.send(`User ${userId} updated successfully!`);
    } else {
        res.status(404).send('User not found');
    }
});

/**
 * Route handler for deleting a user.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 */
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;

    // Find the index of the user with the provided ID
    const userIndex = users.findIndex(u => u.id === parseInt(userId));

    if (userIndex !== -1) {
        // Remove the user from the array of users
        users.splice(userIndex, 1);

        res.send(`User ${userId} deleted successfully!`);
    } else {
        res.status(404).send('User not found');
    }
});