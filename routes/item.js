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

router.get('/api/mshoes', async function(req, res) {
    const p = await item.find({
        gender: 'Male',
        category: 'Shoes'
    });
    res.send(p);
});

router.get('/api/fshoes', async function(req, res) {
    const p = await item.find({
        gender: 'Shoes',
        category: 'Clothes'
    });
    res.send(p);
});

router.get('/api/mclothes', async function(req, res) {
    const p = await item.find({
        gender: 'Male',
        category: 'Clothes'
    });
    res.send(p);
});

router.get('/api/fclothes', async function(req, res) {
    const p = await item.find({
        gender: 'Female',
        category: 'Clothes'
    });
    res.send(p);
});

router.get('/api/featureditems', async function(req, res) {
    const p = await item.find({
        featured: true
    });
    res.send(p);
})



module.exports = router;
