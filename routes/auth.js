const passport = require('passport');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var User = require('../models/user');

  router.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  router.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
    }
  );

  router.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  router.get('/api/current_user', (req, res) => {
      res.send(req.user);
  });

  router.get('/api/user/:_id', async function(req, res){
    const p = await User.find({ _id: req.params})
    res.send(p[0]);
  });
 
module.exports = router;
