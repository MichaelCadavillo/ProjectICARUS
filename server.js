var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var Data = require('./LoginValidation.js');
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(bodyParser.json());
app.set('port', 8000);
// app.use(express.static(path.join(__dirname, '/public/html/')));
app.use('/', express.static(path.join(__dirname, '/public/html')));
app.use('/resources/', express.static(path.join(__dirname, '/public/resources')));
app.post('/input',
		function(req, res) {
			var db = new Data(req.body.user.username, req.body.user.password,
					req, res);
    console.log("Result: " + db);
		});
console.log('Server running on port: ' + app.get('port'));
app.listen(app.get('port'));
