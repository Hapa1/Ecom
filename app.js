const express = require('express');
const keys = require('./config/keys');
const app = express()
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
require('./passport');
//require('./client/src/setupProxy')(app);

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

if (process.env.NODE_ENV === 'production') {
  //Express will server up production assets
  //like main.js file, or main.css

  app.use(express.static('client/build'));

  //Express will serve up the index.html file if
  //it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

}
const port = process.env.PORT || 5000;
app.listen(port);

module.exports = app;