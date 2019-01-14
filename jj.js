const axios = require('axios')
const fetch = require('isomorphic-fetch')
axios.get('https://jsonmock.hackerrank.com/api/countries').then
(res => {
    console.log(res.data.data[0].name)
    //var d = res.data
    //console.log(d[0].name)
});

fetch('https://jsonmock.hackerrank.com/api/countries').then(
    data => {
        data.json()
    }
).then(
    res => {
        console.log("RES",res)
    }
)
