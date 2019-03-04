var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Item = require('../models/item');
var upload = require('../services/upload');

const imageUpload = upload.single('image');

router.get('/api/items/:_id', async function(req, res) {
    const p = await Item.find({ _id: req.params})
    console.log(p[0])
    res.send(p[0]);
});

router.post('/api/image-upload', async function(req, res) {
    
    imageUpload(req,res, function(err) {
        if (err) {
            return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}] });
        }
        const p = Item.find({ _id: '5c7cfdbc55787f5314b60fe2'}) 
        console.log(p[0])
        url = req.file.location
        //p.url = url
        //p.save()
        return res.json({'url': req.file.location})

    });
});

router.get('/api/items', async function(req, res) {
    const p = await Item.find();
    res.send(p);
});

router.post('/api/createitem', async function(req, res) {
            var item = new Item({
                name: req.body.data.name,
                description: req.body.data.description,
                price: req.body.data.price,
                _user: req.user.id,
            })
            try {
                item.save(); //async function
                req.user.items.push(item)
                const u = req.user.save()
                res.send(u)
              } catch (err) {
                res.status(422).send(err);
            }
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
