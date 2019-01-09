const express = require('express');
const keys = require('./config/keys');
const app = express()
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

app.use(cors());
require('./passport');
//require('./client/src/setupProxy')(app);

app.use(express.static('static'));

mongoose.connect(keys.mongoURI);

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.get('/api', (req, res) => {
    res.send('Hi');
});

app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes/item'));
app.use(require('./routes/auth'));
app.use(require('./routes/comment'));

const port = process.env.PORT || 5000;
app.listen(port);

module.exports = app;