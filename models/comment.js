var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    _Item: {type: Schema.Types.ObjectId, ref: 'Item'},
    text: {type: String, required: true, default: 'This is a comment'}
})

module.exports = mongoose.model('comment', commentSchema );