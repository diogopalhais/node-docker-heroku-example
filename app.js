'use strict';

const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Running on port:${port}`);