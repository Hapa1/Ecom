const express = require('express');
const keys = require('./config/keys');
const app = express()
const mongoose = require('mongoose');

app.use(express.static('static'));

mongoose.connect(keys.mongoURI);

const itemRouter = require('./routes/item');

app.use('/', itemRouter);

app.get('/', (req, res) => {
    res.send('Hi');
});

const port = process.env.PORT || 5000;
app.listen(port);

module.exports = app;