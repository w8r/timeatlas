var config = require('../config');

exports.index = function(req, res) {
	// res.send('Hello World!');
	res.render('index', {
		title: 'Home',
		text: '',
		config: config
	})
};
