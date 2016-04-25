var utils = {
	encodeHtml: function(htmlArr) {
		for(var element in htmlArr) {
			var newElement = htmlArr[element].replace(/</g, '&lt;').replace(/>/g, '&gt;');

			htmlArr[element] = newElement;
		};

		return htmlArr;
	}
};

module.exports = utils;