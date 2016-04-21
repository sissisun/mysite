var gu = require('guthrie');
var moment = require('moment');
var baseController = require('../common/baseController');
var noteController =  new gu.controller.inherit(baseController);
var noteModel = require('../models/noteModel');

noteController.actions = {
	'index': {
		GET: function(req, res) {
			res.view({pageTitle: '笔记'});
		}
	},

	'submit': {
		POST: function(req, res) {
			var data = req.body;
			var noteInfo = data;
			console.log(Object.assign(noteInfo, {
				createTime: moment().format('YYYY-MM-DD HH:mm:ss')
			}))
			var noteEntity = new noteModel(Object.assign(noteInfo, {
				createTime: moment().format('YYYY-MM-DD HH:mm:ss')
			}));

			noteEntity.save(function(err) {
				res.status(200).send({success:true});
			});

		}
	}
}

module.exports =  noteController;