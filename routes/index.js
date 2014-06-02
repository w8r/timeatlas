var config = require('../config');

exports.index = function(req, res) {
	var params = req.params;
	console.log(params);
	res.render('index', {
		title: 'Home',
		text: '',
		config: config
	})
};
