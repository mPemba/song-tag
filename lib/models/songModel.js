var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var artist = require('./artistModel');

var schema = new Schema({
	name: {type: String, index: true, required: true},
	album: {type: String, index: true, required: true},
	genre: {type: String},
	releasedOn: {type: Date, default: Date.now},
	isExplicit: {type: Boolean},
	artist: {type: Schema.Types.ObjectId, ref: "artist"},
	tags: [{type: String, ref: "tag"}]
})

module.exports = mongoose.model('song', schema);