#! /usr/bin/env node

console.log('This script populates your database');

var async = require('async')
var Item = require('./models/item')
var mongoose = require('mongoose');
var keys = require('./config/keys');
mongoose.connect(keys.mongoURI);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var items = []

function createItem(name, description, price) {
  itemdetail = { 
    name: name,
    description: description,
    price: price,
  }
    
  var item = new Item(itemdetail);    
  item.save(function (err) {
    if (err) {
      //cb(err, null)
      return
    }
    console.log('New Item: ' + item);
    //item.push(item)
    //cb(null, item)
  }  );
}

function createItems(cb) {
    async.parallel([
        function(callback) {
          itemCreate("Shirt 1", 'This is a description', 10);
        },
        function(callback) {
          itemCreate("Shirt 2", 'This is a description', 29.99);
        },
        function(callback) {
          itemCreate("Shirt 3", 'This is a description', 34);
        },
        function(callback) {
          itemCreate("Shirt 3", 'This is a description', 34);
        },
        function(callback) {
          itemCreate("Shirt 5",'This is a description', 12);
        }
        ],
        // optional callback
        cb);
}

async.series([
    createItem
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Success');
    }
    // All done, disconnect from database
    mongoose.connection.close();
});

