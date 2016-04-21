var gu = require('guthrie');
var baseController = require('../common/baseController');
var photoController =  new gu.controller.inherit(baseController);

photoController.actions = {
	'index': {
		GET: function(req, res) {
			res.view({pageTitle: '照片'});
		}
	}
}

module.exports =  photoController;