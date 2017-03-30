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
		database : 'MyDatabase',
		port : 3306
	});
	connection.connect();
	connection.query("Select * from students Where StudentID = ? AND password = ? ",
			[ username, password ], function(err, rows) {
				if (err) {
					console.log(err);
					return;
				}

				if (rows.length === 0) {
					console.log("Non existent");
				} else {
					rows.forEach(function(result) {
						console.log("Welcome: " + (result.firstName + " " +result. lastName));
					});
					res.redirect('/home-page.html');
				}

			});
	connection.end(function() {
		console.log("Connection closed");
	});
}
module.exports = Dbconnector;
