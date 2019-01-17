var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    _item: {type: Schema.Types.ObjectId, ref: 'Item'},
    text: {type: String, required: true, default: 'This is a comment'},
    rep: {type: Number, required: true, default: 0}
})

module.exports = mongoose.model('comment', commentSchema );