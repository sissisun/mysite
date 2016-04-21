var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteSchema = new Schema({
	title: {
		type : String,
		required: false
	},
	needCode: {
		type: String,
		required: false
	},
	describe: {
		type: String,
		required: false
	},
	author: {
		type: String,
		required: false
	},
	content: {
		type: String,
		required: false
	},
	code: {
		type: String,
		required: false
	},
	createTime: {
		type: String,
		required: false
	}
});

module.exports = noteSchema;