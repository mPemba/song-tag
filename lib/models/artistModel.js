var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	name: {type: String, index: true, required: true},
	bio: {type: String},
	genre: [{type: String, unique: true}]
})

module.exports = mongoose.model('artist', schema);