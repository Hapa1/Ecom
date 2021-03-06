var async = require('async')
var item = require('./models/item')
var mongoose = require('mongoose');
var keys = require('./config/keys');
var Sentencer = require('sentencer');
mongoose.connect(keys.mongoURI);
mongoose.Promise = global.Promise;
var db = mongoose.connection;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var array = [
    'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dwea8e2406/zoom/DB0695_00_plp_standard.jpg?sw=276&sh=276&sm=fit&hei=276&wid=276&strip=false',
    'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw55a6dcec/zoom/B43628_00_plp_standard.jpg?sw=276&sh=276&sm=fit&hei=276&wid=276&strip=false',
    'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dwe6aa3e39/zoom/DB1868_00_plp_standard.jpg?sw=276&sh=276&sm=fit&hei=276&wid=276&strip=false',
    'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw00ebaf58/zoom/B43874_00_plp_standard.jpg?sw=276&sh=276&sm=fit&hei=276&wid=276&strip=false',
    'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw4c42dcb6/zoom/BB6167_00_plp_standard.jpg?sw=276&sh=276&sm=fit&hei=276&wid=276&strip=false',
    'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw6a2574fb/zoom/DA9955_00_plp_standard.jpg?sw=276&sh=276&sm=fit&hei=276&wid=276&strip=false',
    'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw6a2574fb/zoom/DA9955_00_plp_standard.jpg?sw=276&sh=276&sm=fit&hei=276&wid=276&strip=false',
    'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dwdcc6651f/zoom/DB1592_00_plp_standard.jpg?sw=276&sh=276&sm=fit&hei=276&wid=276&strip=false',
    'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw1fe3b4e0/zoom/BB6919_00_plp_standard.jpg?sw=276&sh=276&sm=fit&hei=276&wid=276&strip=false',
    'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dwe452eff5/zoom/BB7197_00_plp_standard.jpg?sw=276&sh=276&sm=fit&hei=276&wid=276&strip=false',
    'https://www.adidas.com/dis/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dwe9db4b3a/zoom/DB0682_00_plp_standard.jpg?sw=276&sh=276&sm=fit&hei=276&wid=276&strip=false'
]
var nouns = [
    ' AIRS',
    ' SHOES',
    ' RUNNERS',
    ' SKATERS',
    ' ORIGINALS'
]
for(let i = 0; i < 12; i++){
    var noun = nouns[Math.floor(Math.random() * nouns.length + 1)];
    var url = array[Math.floor(Math.random() * array.length + 1)];
    var price = (Math.floor(Math.random() * 150) + 1);
    var adjective = Sentencer.make("{{ adjective }}")
    var name = adjective.toUpperCase() + noun;


    var a = new item({
        name: name,
        price: price + .99,
        imgUrl: url,
        gender: 'Male',
        category: 'Clothes'
    });
    console.log(a);
    a.save();
}

