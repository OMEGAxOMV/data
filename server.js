const express = require('express');
const app = express();
const data = require('./data.json'); // Assuming your JSON file is named data.json

app.get('/farmers', (req, res) => {
    res.json(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
