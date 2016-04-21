(function(fn) {
	if(typeof exports === 'object' && typeof exports.module === 'object') {
		module.exports = fn();
	} else if(typeof require === 'function') {
		require(['jquery'], fn);
	} else {
		fn();
	}
}(function() {
	var $ = window.jQuery;
	$.fn.extend({
		checkNullInput: function(dataName) {
			var dataName = dataName || '[data-null=false]',
				result = true;;

			var needCheckInput = this.find('input, textarea, select').not(':hidden').filter(dataName);

			needCheckInput.each(function(index, element) {
				var val = $.trim($(element).val());
				if(!val || val.length === 0) {
					return result=false;
				}
			});
			return result;
		},

		getFormValue: function(dataName, needEncode) {
			var dataName = dataName || 'name',
				resultObj = {};

			this.find('input, textarea, select').not(':hidden').each(function(index, element) {
				var $element = $(element),
					key = $(element).attr(dataName),
					type = $(element).attr('type'),
					tagName = element.tagName.toUpperCase();

				if(tagName === 'INPUT') {
					switch(type) {
						case 'text':
							resultObj[key] = needEncode ? htmlEncode($.trim($element.val())) : $.trim($element.val());
							break;
						case 'radio':
							if($element.is(':checked')) {
								resultObj[key] = $.trim($element.val());
							}
							break;
						case 'checkbox': 
							if($element.is(':checked')) {
								resultObj[key] = resultObj[key] || [];
								resultObj[key].push($.trim($element.val()));
							}
							break;
						default:
							break;
					}
				}

				if(tagName === 'SELECT' || tagName === 'TEXTAREA') {
					resultObj[key] = needEncode ? htmlEncode($.trim($element.val())) : $.trim($element.val());
				}
			});
			return resultObj;
		}
	})
}));