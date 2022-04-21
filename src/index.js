const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Fuck USA');
});

app.listen(port, () => {
    console.log('Service Running in localhost:3000');
});