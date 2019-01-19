var mongoose = require('mongoose');

var Schema = mongoose.Schema;


function formatDate(date){
    date = new Date();
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];
    
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
    
      return monthNames[monthIndex] + ' ' + day + ', ' + year;
}

var commentSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    _item: {type: Schema.Types.ObjectId, ref: 'Item'},
    text: {type: String, required: true, default: 'This is a comment'},
    dateString: {type: String, default: formatDate(Date.now) },
    rep: {type: Number, required: true, default: 0},
    rating: {type: Number}
})

module.exports = mongoose.model('comment', commentSchema );