var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

app.get('/',function(req,res){
    res.sendfile('public/index.html');
});

app.get('/tag/:name',function(req,res){
    res.sendfile('public/index.html');
});

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port %d', server.address().port);
});