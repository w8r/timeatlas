var config = require('../config');

exports.story = function(req, res) {
    res.render('index', {
        title: 'Story',
        text: '',
        config: config
    })
};
