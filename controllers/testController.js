var gu = require('guthrie');
var baseController = require('../common/baseController');
var testController =  new gu.controller.inherit(baseController);

testController.actions = {
	index: {
		'GET': function(req, res) {
			res.view();
		}
	}
};

module.exports = testController;