var gu = require('guthrie');
var baseController = require('../common/baseController');
var articleController =  new gu.controller.inherit(baseController);
var noteModel = require('../models/noteModel');
var dbOperation = require('../core/dbOperation');

articleController.actions = {
	'index': {
		GET: function(req, res) {
			res.view({pageTitle: '文章'});
		}
	},

	'detail': {
		GET: function(req, res) {
			res.render('article/detail',{pageTitle: '详情页'});
		}
	},

	getDetailContent: {
		GET: function(req, res) {
			var data = req.query,
				condition = {'_id': data.id},
				filter = {};

			dbOperation.find(noteModel, condition, filter, function(doc) {
				res.status(200).send({success:true, body: doc[0]});
			});
		}
	},

	getArticlesById: {
		GET: function(req, res) {

		}
	},

	getArticles: {
		GET: function(req, res) {
			var condition = {},
				filter = {"needCode":0, "content":0};
			dbOperation.find(noteModel, condition, filter, function(doc) {
				res.status(200).send({success:true, body: doc});
			})

		}
	}
}

module.exports =  articleController;