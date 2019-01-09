const passport = require('passport');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var item = require('../models/user');

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
    //if(req.user == undefined) {
    //  res.send({});
    //}
    //else {
      res.send(req.user);
    //}
  });
 
  module.exports = router;
