var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + '/build'));
app.get('/', function(req, res, n) {
	res.sendFile(__dirname + '/build/ffxiv_timer.html');
});
app.listen(port);