var gu = require('guthrie');
var baseController = require('../common/baseController');
var articleController =  new gu.controller.inherit(baseController);

articleController.actions = {
	'index': {
		GET: function(req, res) {
			res.view({pageTitle: '文章'});
		}
	}
}

module.exports =  articleController;