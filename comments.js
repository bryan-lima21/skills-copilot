
//Create a web server
//Create a route for GET /comments

const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

const comments = [
    { id: 1, text: 'This is the first comment' },
    { id: 2, text: 'This is the second comment' }
];

// Route for GET /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
