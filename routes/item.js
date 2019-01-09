var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var item = require('../models/item');

router.get('/api/items/:_id', async function(req, res) {
    const p = await item.find({ _id: req.params})
    res.send(p[0]);
});

router.get('/api/items', async function(req, res) {
    const p = await item.find();
    res.send(p);
});


module.exports = router;
