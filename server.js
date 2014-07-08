// Very simple express web server serving a static assets and handling basic routing

var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

// Serve static assets
if (app.settings.env === 'production') {
    app.use(express.static(__dirname + '/public_combined'));
} else {
    app.use(express.static(__dirname + '/public'));
}

// http://localhost:3000/
app.get('/',function(req,res){
    res.sendfile('public/index.html');
});

// http://localhost:3000/tag/Berlin
app.get('/tag/:name',function(req,res){
    res.sendfile('public/index.html');
});

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port %d', server.address().port);
});