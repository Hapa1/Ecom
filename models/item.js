var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var itemSchema= new Schema({
    name: {type: String, required: true, default: 'Shirt'},
    description: {type: String, required: true, default: 'This is a description'},
    price: {type: Number, required: true, default: 9.99},
    imgUrl: {type: String, default: 'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dwc822fb7d/zoom/CG4117_00_plp_standard.jpg?sw=276&sh=276&sm=fit&hei=276&wid=276&strip=false'},
    size: {type: String, enum: ['XS', 'S', 'M', 'L', 'XL'], default: 'M'}
});

module.exports = mongoose.model('Item', itemSchema);