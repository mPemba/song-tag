var artistService = require('./../services/artistService.js');

module.exports.post = function(req, res) {
	artistService.save(req.body)
	    .then(function(response) {
	    	res.status(200).json(response);
	    }, function(err) {
	    	res.status(400).json(err);
	    })
}

module.exports.get = function(req, res) {
	artistService.find(req.query)
	    .then(function(response) {
	    	res.status(200).json(response);
	    }, function(err) {
	    	res.status(400).json(err);
	    })
}

// module.exports.get = function(req, res) {
// 	artistService.find(req.query)
// 	    .then(function(response) {
// 	    	if (response.length) {
// 	    		res.status(200).json(response);
// 	    	} else {
// 	    		res.status(200).json("no thing");
// 	    	}
// 	    }, function(err) {
// 	    	res.status(400).json(err);
// 	    })
// }