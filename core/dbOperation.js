var dbOperation = {
	save: function(object, callback) {
		object.save(function(err, doc) {
			console.log(23)
			if(err) {
				console.log(err);
			} else {
				console.log(doc + ' saved');
				if(typeof callback === 'function') {
					callback.apply(this, [doc, err]);
				};
			}
		});
	},

	remove: function(model, condition, callback) {
		model.remove(condition, function(err, doc) {
			if(err) {
				console.log(err);
			} else {
				console.log(doc);
				if(typeof callback === 'function') {
					callback.apply(this, [doc, err]);
				};
			}
		});
	},

	update: function(model, condition, object, callback) {
		model.update(condition, object, function(err, doc) {
			if(err) {
				console.log(err);
			} else {
				console.log(doc);
				if(typeof callback === 'function') {
					callback.apply(this, [doc, err]);
				};
			}
		});
	},

	find: function(model, condition, filter, callback) {
		model.find(condition, filter, function(err, doc) {
			if(err) {
				console.log(err);
			} else {
				/*console.log(doc);*/
				if(typeof callback === 'function') {
					callback.apply(this, [doc, err]);
				};
			}
		});
	},

	findOne: function(model, condition, callback) {
		model.findOne(condition, function(err, doc) {
			if(err) {
				console.log(err);
			} else {
				console.log(doc);
				if(typeof callback === 'function') {
					callback.apply(this, [doc, err]);
				};
			}
		});
	},

	count: function(model, condition, callback) {
		model.count(condition, function(err, doc) {
			if(err) {
				console.log(err);
			} else {
				console.log(doc);
				if(typeof callback === 'function') {
					callback.apply(this, [doc, err]);
				};
			}
		});
	}
};


module.exports = dbOperation;