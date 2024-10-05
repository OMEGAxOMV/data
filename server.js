const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Endpoint to get the farmer data
app.get('/data', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading data');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
