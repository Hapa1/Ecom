var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var item = require('../models/item');
var Comment = require('../models/comment');

router.post('/api/createcomment', async function(req, res) {
    var comment = new Comment({
        text: req.body.text,
        _user: req.user.id,
        _item: req.body.id
    })
    try {
        await comment.save(); //async function
        res.send(comment)
      } catch (err) {
        res.status(422).send(err);
    }
    console.log(comment);
});

router.get('/api/getcomments/:_id', async function(req, res) {
    const p = await Comment.find({ _item: req.params})
    res.send(p);
})
module.exports = router;