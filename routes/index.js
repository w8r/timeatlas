var config = require('../config');

exports.index = function(req, res) {
    var params = req.params;
    res.render('index', {
        title: 'Timeatlas',
        text: '',
        config: config
    })
};
