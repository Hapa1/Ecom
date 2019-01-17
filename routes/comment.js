var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var item = require('../models/item');
var Comment = require('../models/comment');

router.post('/api/items/createcomment', async function(req, res) {
    console.log(req.body)
    var comment = new Comment({
        //text: //req.body.text,
        //_user: //req.body.user._id,
        //_item: //req.params,
    })
    try {
        await comment.save(); //async function
        res.send(comment)
      } catch (err) {
        res.status(422).send(err);
    }
});

module.exports = router;