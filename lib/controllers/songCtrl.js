var songService = require('./../services/songService');
var artistService = require('./../services/artistService');


module.exports.post = function(req, res) {
	artistService.findOne(req.body.artist)
	    .then(function(artist) {
	    	req.body.artist = artist._id;
	    	songService.save(req.body).then(function(result) {
	    		res.status(200).json(result);
	    	}, function(err) {
	    		res.status(400).json(err);
	    	})
	    }, function(err) {

	    })
}

module.exports.get = function(req, res) {
	songService.find(req.query).then(function(response) {
		res.status(200).json(response);
	}, function(err) {
		res.status(400).json(err);
	})
}