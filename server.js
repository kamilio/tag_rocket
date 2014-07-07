var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.sendfile('public/index.html');
});

app.get('/tag/:name',function(req,res){
    res.sendfile('public/index.html');
});

var server = app.listen(3000, function() {
    console.log('Express server listening on port %d', server.address().port);
});