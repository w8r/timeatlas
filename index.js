var express = require("express");
var logfmt = require("logfmt");

var http = require('http');
var path = require('path');

var lessMiddleware = require('less-middleware');

var config = require('./config');
var routes = require('./routes');
var app = express();

app.use(logfmt.requestLogger());
app.set('views', __dirname + '/views');
/* JADE */
app.set('view engine', 'jade');
/* LESS */
app.use(lessMiddleware('/less', {
    dest: '/css',
    pathRoot: path.join(__dirname, 'public')
}));
app.use(express.static(__dirname + '/public'));


app.get('/', routes.index);

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("application started on port " + port);
});
