var artistModel = require('./../models/artistModel.js');
var q = require('q');

module.exports.save = function(artist) {
	var dfd = q.defer();
	artistModel(artist).save(function(err, res) {
		if (!err) {
			dfd.resolve(res);
		} else {
			dfd.reject(err);
		}
	})
	return dfd.promise;
}

module.exports.find = function(query) {
	var dfd = q.defer();
	artistModel.find(query, function(err, results) {
		if (!err) {
			dfd.resolve(results);
		} else {
			dfd.reject(err);
		}
	})
	return dfd.promise;
}

module.exports.findOne = function(query) {
	var dfd = q.defer();
	artistModel.findOne(query, function(err, results) {
		if (!err) {
			dfd.resolve(results);
		} else {
			dfd.reject(err);
		}
	})
	return dfd.promise;
}