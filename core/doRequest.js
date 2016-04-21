var request = require('request');

var doRequest = function(opts, callback) {
	if(!opts || !opts.url) {return;}
	var options = {
		url: opts.url || '',
		method: opts.method || 'GET'
	};

	function callbackHandle(err, res, body) {
		if(err) {
			return callback(res, {"suceess": false, "message": "后端服务错误！"})
		}
		if(body) {
			try {
				body = typeof body === 'string' ? JSON.parse(body) : body;
			} catch(e) {
				var temp = body;
				body = {};
				body.result = temp;
			}
			body.success = (res && res.statusCode <= 299) ? true : false;
		} else {
			body = {};
			body.success = (res && res.statusCode <= 299) ? true : false;
		}
		callback(res, body);
	};

	request(options, callbackHandle);
};

module.exports = doRequest;