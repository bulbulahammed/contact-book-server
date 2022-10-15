const express = require('express')
const app = express();


app.get('/', (req, res) => {
    res.send('Hello, this is the server side of contact book app')
});

module.exports = app;