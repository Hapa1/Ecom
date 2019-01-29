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
  router.post('/api/profile/update', async function(req,res){
    console.log(req.body);
    req.user.name = req.body.name
    req.user.email = req.body.email
    req.user.location = req.body.location
    const user = await req.user.save();
    res.send(user)
  });

  router.post('/api/profile', async function(req, res) {
    //console.log(req.body.user.id)
    const p = await User.find({ _id: req.user.id})
    console.log(req.body.name)
    p.name = req.body.name

    try {
      await p.save(); //async function
      res.send(comment)
    } catch (err) {
      res.status(422).send(err);
    }
    res.send(p);
  })
module.exports = router;
