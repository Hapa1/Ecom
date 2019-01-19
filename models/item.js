var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const baseOptions = {
    discriminatorKey: 'itemtype', // our discriminator key, could be anything
    collection: 'items', // the name of our collection
  };
  
  // Our Base schema: these properties will be shared with our "real" schemas
  const Base = mongoose.model('Base', new mongoose.Schema({
        title: { type: String, required: true },
        date_added: { type: Date, required: true },
        redo: { type: Boolean, required: false },
      }, baseOptions,
    )
);


var itemSchema= new Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    comments: [{
      type: Schema.Types.ObjectId, ref: 'comment'
    }],
    name: {type: String, required: true, default: 'Shirt'},
    description: {type: String, required: true, default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    price: {type: Number, required: true, default: 9.99},
    imgUrl: {type: String, default: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dwc822fb7d/zoom/CG4117_00_plp_standard.jpg?sw=276&sh=276&sm=fit&hei=276&wid=276&strip=false'},
    size: {type: String},
    category: {type: String, enum: ['Shoe', 'Clothes', 'Accessory'], default: 'Shoe'},
    gender: {type: String, enum: ['Male', 'Female']},
    featured: {type: Boolean, default: false},
    rating: {type: Number, required: true, default: 2.5}
});

var shoeSchema = new Schema({

})

module.exports = mongoose.model('Item', itemSchema);