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
				result = {success: true, msg: ''};

			var needCheckInput = this.find('input, textarea, select').not(':hidden').filter(dataName);

			needCheckInput.each(function(index, element) {
				var $element = $(element),
					val = $.trim($element.val()),
					msg = $element.attr('data-msg') || '必填项不能为空',
					reg = $element.attr('data-reg'),
					regMsg = $element.attr('data-regMsg') || '必填项不能为空';
				if(!val || val.length === 0) {
					result = {success: false, msg: msg};
					return false;
				} else {				
					if(reg && !new RegExp(reg).test(val)) {
						result = {success: false, msg: regMsg};
						return false;
					}
				}
			});
			return result;
		},

		getFormValue: function(needEncode, dataName) {
			var dataName = dataName || 'name',
				resultObj = {};

			this.find('input, textarea, select, span, a').not(':hidden').each(function(index, element) {
				var $element = $(element),
					key = $(element).attr(dataName) || $(element).attr('data-name'),
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
				if(tagName === 'SPAN' || tagName === 'A') {
					if($element.hasClass('formCheckbox')) {
						resultObj[key] = resultObj[key] || [];
						resultObj[key].push($element.attr('data-value'));
					} else {
						resultObj[key] = $element.attr('data-value');
					}
				}
 			});
			return resultObj;
		},

		initPlaceHolder: function(opts) {
			var defaults = {
				leftDistance: 10,
				topDistance: 5
			};

			defaults = $.extend(true, {}, defaults, opts || {});
			if(!('placeholder' in document.createElement('input'))) {
				this.each(function(index, element) {
					var $el = $(element),
						placeholder = $el.attr('placeholder'),
						_resetPlaceholder = null, $span, elId;

					if(placeholder) {
						elId = $el.attr('id');
						if(!elId) {
							elId = 'placeholder' + new Date().getTime() + (Math.random() * 10000).toFixed();
							$el.attr('id', elId);
						}
						$span = $('<label>', {
							html: $el.val() ? '' : placeholder,
							'for': elId,
							css: {
								position: 'absolute',
								left: $el.position().left + defaults.leftDistance,
								top: $el.position().top,
								color: '#C3C3C3',
								cursor: 'text',
								fontSize: '14px'
 							}
						}).insertAfter($el);

						_resetPlaceholder = function() {
							if($el.val()) {
								$span.html('');
							} else {
								$span.html(placeholder);
							}
						};

						$el.on('focus blur input keyup propertychange', _resetPlaceholder);
					}

				})
			}
		}

	})
}));