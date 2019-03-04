var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Item = require('../models/item');

router.get('/api/items/:_id', async function(req, res) {
    const p = await Item.find({ _id: req.params})
    res.send(p[0]);
});

router.get('/api/items', async function(req, res) {
    const p = await Item.find();
    res.send(p);
});

router.post('/api/createitem', async function(req, res) {
    console.log("BODY",req.body.data)
    var item = new Item({
        name: req.body.data.name,
        description: req.body.data.description,
        price: req.body.data.price,
        _user: req.user.id,
    })
    try {
        await item.save(); //async function
        req.user.items.push(item)
        const u = await req.user.save()
        res.send(u)
      } catch (err) {
        res.status(422).send(err);
    }
    console.log(item);
});

router.get('/api/mshoes', async function(req, res) {
    const p = await Item.find({
        gender: 'Male',
        category: 'Shoes'
    });
    res.send(p);
});

router.get('/api/fshoes', async function(req, res) {
    const p = await Item.find({
        gender: 'Shoes',
        category: 'Clothes'
    });
    res.send(p);
});

router.get('/api/mclothes', async function(req, res) {
    const p = await Item.find({
        gender: 'Male',
        category: 'Clothes'
    });
    res.send(p);
});

router.get('/api/fclothes', async function(req, res) {
    const p = await Item.find({
        gender: 'Female',
        category: 'Clothes'
    });
    res.send(p);
});

router.get('/api/featureditems', async function(req, res) {
    const p = await Item.find({
        featured: true
    });
    res.send(p);
})



module.exports = router;
