var gu = require('guthrie');
var baseController = require('../common/baseController');
var homeController = new gu.controller.inherit(baseController);

homeController.actions = {
	index: {
		GET: function(req, res) {
			res.view({
				pageTitle: '首页'
			})
		}
	}
};

module.exports = homeController;