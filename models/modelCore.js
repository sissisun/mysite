var config = require('../config');

var connectString = config.db.connectString;
var dbConnect = require('../core/connectDb');
var db = dbConnect(connectString);

module.exports = db;