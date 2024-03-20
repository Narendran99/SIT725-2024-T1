const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Endpoint to add two numbers
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const result = Number(num1) + Number(num2);
    res.send(`The sum of ${num1} and ${num2} is ${result}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
