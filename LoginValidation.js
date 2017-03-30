var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
function Dbconnector(username, password, req, res) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'studentlogin',
		port : 3306
	});
	connection.connect();
	connection.query("Select * from login_info Where ID = ? AND Password = ? ",
			[ username, password ], function(err, rows) {
				if (err) {
					console.log(err);
					return;
				}

				if (rows.length === 0) {
					console.log("Non existent");
				} else {
					rows.forEach(function(result) {
						console.log("Welcome: " + result.ID);
					});
					res.redirect('/InteractiveCalendar02.html');
				}

			});
	connection.end(function() {
		console.log("Connection closed");
	});
}
module.exports = Dbconnector;
