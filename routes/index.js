var config = require('../config');

exports.index = function(req, res) {
	res.render('index', {
		title: 'Home',
		text: '',
		config: config
	})
};