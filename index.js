var express = require("express");
var logfmt = require("logfmt");

var http = require('http');
var path = require('path');

var lessMiddleware = require('less-middleware');

var config = require('./config');
var routes = require('./routes');
var app = express();

app.use(logfmt.requestLogger());

app.set('port', process.env.PORT || 3000);
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

app.listen(app.get('port'), function() {
    console.log("✔ Express server listening on port %d in %s mode", app.get('port'), app.settings.env);
});
