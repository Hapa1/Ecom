const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({
	googleId: String,
	name: String, 
	imgUrl: {type: String, default: 'https://www.manufacturingusa.com/sites/manufacturingusa.com/files/default.png'},
	firstName: String,
	lastName: String,
	email: String,
	address: String,
	comments: [{
		type: Schema.Types.ObjectId, ref: 'comment'
	}]


	// local: {
	// 	email: { type: String, unique: true },
	// 	password: { type: String }
	// },
	// google: {
	// 	id: { type: String },
	// 	photos: []
	// },
	// firstName: { type: String },
	// lastName: { type: String }
});

// Create reference to User & export
const User = mongoose.model('User', userSchema)
module.exports = User