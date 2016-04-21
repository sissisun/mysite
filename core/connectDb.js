var mongoose = require('mongoose');
var db = null;

function connectDb(connectString) {
	db = mongoose.createConnection(connectString);

	db.on('open', function(err) {
		if(err) {
			console.log(err);
		}
		console.log('mongo connect to ' + connectString);
	});
	db.on('error', function(err) {
		console.log(err);
	});

	return db;
};

module.exports = connectDb;