var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var item = require('../models/item');
var Comment = require('../models/comment');

router.post('/api/comment', async function(req, res) {
    const text = req.body.text;
    var comment = new Comment({
        text: text
    })
    try {
        await comment.save(); //async function
        res.send(comment)
      } catch (err) {
        res.status(422).send(err);
    }
});



module.exports = router;