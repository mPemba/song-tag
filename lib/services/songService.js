var songModel = require('./../models/songModel');
var q = require('q');

module.exports.save = function(song) {
	var dfd = q.defer();
	songModel(song).save(function(err, response) {
		if (!err) {
			dfd.resolve(response);
		} else {
			dfd.reject(err);
		}
	})
	return dfd.promise;
}

module.exports.find = function(query) {
	var dfd = q.defer();
	songModel.find(query).populate('artist').exec(function(err, results) {
		if (!err) {
			dfd.resolve(results);
		} else {
			dfd.reject(err);
		}
	})

	return dfd.promise;
}