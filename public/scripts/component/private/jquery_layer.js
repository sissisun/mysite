(function(fn) {
	if(typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = fn();
	} else if(typeof define === 'function' && define.amd) {
		define([],fn);
	} else {
		window.coverLayer = fn();
	}
}(function() {
	var defaultOpts = {
		message: '<h1>please wait...</h1><button data-action="close-layer">关闭</button>',
		name: 'photo-layer',
		full: true,
		baseZ: 1100,
		speed: 1000,
		needCloseBtn: false,
		needLeftBtn: false,
		needRightBtn: false,
		closeBtn: '[data-action="close-layer"]',
		leftBtn: '[data-action="left"]',
		rightBtn: '[data-action="right"]',
		onBeforeOpen: null,
		onAfterOpen: null,
		onBeforeClose: null,
		onAfterClose: null,
		leftBtnEvent: null,
		rightBtnEvent: null

	};

	var inArray = function() {
		if(!arguments[0] || arguments[0].length <= 0 || !arguments[1]) {
			return false;
		}
		if(Object.prototype.toString.apply(arguments[0]) != '[object Array]') {
			return;
		}
		for(var i=0; i<arguments[0].length; i++) {
			if(arguments[0][i] === arguments[1]) {return true;}
		}
		return false;
	};

	var debounce = function(fun, wait, immediate) {
		var timer;
		return function() {
			var args = arguments, context = this,
				later = function() {
					timer = null;

					if(!immediate) {
						fun.apply(context || this, args);
					}
				};
			var callNow = !timer && immediate;
			clearTimeout(timer);
			timer = setTimeout(later, wait);
			if(callNow) {
				fun.apply(context || this, args)
			}
		}
	};
	
	var coverLayer = {
		opts: {
			currentLayerId: '',
			layers: [],
			layerContent: [],
			layerBtns: [],
			count: 0
		},
		create: function(opts) {
			var self = this;

			self.opts = $.extend(true, {}, defaultOpts, this.opts, opts || {});
			self.opts.currentLayerId = self.opts.name ? self.opts.name : new Date().toUTCString() + (Math.random() * 100000).toFixed();

			var layer1 = $('<div class="overLayer" style="display: none; position: fixed; z-index:'+ self.opts.baseZ++ +'; margin: 0; padding: 0; width: 100%;height: 100%; top:0; left: 0;opacity: 0.6;filter: alpha(opacity=60); background-color: #000"></div>');
			var layer2 = $('<div class="contentLayer" style="display: none; position: fixed; z-index: '+ self.opts.baseZ++ +'; margin: 0; padding: 0; width: 100%;height: 100%; top:0; left: 0;"></div>');	
			self.opts.layers = [layer1, layer2];

			$.each(self.opts.layers, function() {
				this.attr('data-layer', self.opts.currentLayerId);
				$('body').append(this);
			});

			if(self.opts.message) {
				var wrapDiv = $('<div class="contentWrapper" style="position:absolute"></div>');
				$(layer2).empty().append(wrapDiv);
				$(self.opts.message).appendTo(wrapDiv);
				self.opts.layerContent.push($(wrapDiv));
			} else {
				try{
					console.log('没有HTML');
				} catch (e) {};
			}
			if(self.opts.needCloseBtn) {
				var closeBtnHtml = $('<a href="javascript:;" style="display: block; position:absolute; right: 20px; top: 20px; color: #fff; text-decoration: none;" data-action="close-layer"><span class="icon-remove icon-4x"></span></a>');
				$(layer2).append(closeBtnHtml);
			}
			if(self.opts.needLeftBtn) {
				var leftBtnHtml = $('<a href="javascript:;" style="display: block; position:absolute; left: 20px; top: 50%; color: #fff; text-decoration: none;" data-action="left"><span class="icon-angle-left icon-4x"></span></a>');
				$(layer2).append(leftBtnHtml);
				self.opts.layerBtns.push($(leftBtnHtml));
			}
			if(self.opts.needRightBtn) {
				var rightBtnHtml = $('<a href="javascript:;" style="display: block; position:absolute; right: 20px; top: 50%; color: #fff; text-decoration: none;" data-action="right"><span class="icon-angle-right icon-4x"></span></a>');
				$(layer2).append(rightBtnHtml);
				self.opts.layerBtns.push($(rightBtnHtml));
			}
			self.initEvents();
			
		},
		open: function(opts) {
			var self = this;

			if(self.opts.currentLayerId) {
				console.log('已有层创建！');
				return;
			}

			try {
				this.create(opts);
			} catch (e) {
				 console.log('创建层失败');
				return;
			}

			if(typeof self.opts.onBeforeOpen === 'function') {
				self.opts.onBeforeOpen.apply(self, opts);
			}

			self.show();
		},
		show: function() {
			var self = this,
				layers = self.opts.layers;

			$.each(layers, function(index) {
				$(this).fadeIn(self.opts.speed);
				if(index === layers.length-1) {
					self.setLayerPosition();
					self.setBtnsPosition();
				}
			});
			if(typeof self.opts.onAfterOpen === 'function') {
				self.opts.onAfterOpen.apply(self, opts);
			}
		},
		remove: function() {
			var self = this;		
			$.each(self.opts.layers, function() {
				this.remove();
			});
			self.reset();
		},
		reset: function() {
			var self = this;

			self.opts.currentLayerId = '';
			self.opts.layers = [];
			self.opts.layerContent = [];
			self.opts.layerBtns = [];
			$(window).off('resize.Layer');
			$(document).off('click.Layer');
		},
		close: function() {
			var self = this,
				layers = self.opts.layers;

			if(typeof self.opts.onBeforeClose === 'function') {
				self.opts.onBeforeClose.apply(self, opts);
			}
			$.each(layers, function(index) {
				this.fadeOut(self.opts.speed, function() {
					if(index === layers.length-1) {
						self.remove();
					}
					
				});
			});

			if(typeof self.opts.onAfterClose === 'function') {
				self.opts.onAfterClose.apply(self, opts);
			}

		},
		setLayerPosition: function() {
			var self = this,
				layer = self.opts.layerContent[0];

			layer.css({
				left: $(window).outerWidth()/2 - layer.outerWidth()/2,
				top: $(window).outerHeight()/2 - layer.outerHeight()/2
			})
		},
		setBtnsPosition: function() {
			var self = this,
				btns = self.opts.layerBtns;
			if(btns.length === 0) {return;}
			$.each(btns, function() {
				this.css({
					top: $(window).outerHeight()/2 - this.outerHeight()/2
				})
			})

		},
		initEvents: function() {
			var self = this;

			$(document).on('click.Layer', self.opts.closeBtn, function() {
				self.close();
			});
			$(window).on('resize.Layer', function() {
				debounce(function() {
					self.setLayerPosition();
				}, 200);
			});

			$(document).on('click.Layer', self.opts.leftBtn, function() {
				if(typeof self.opts.leftBtnEvent === 'function') {
					self.opts.leftBtnEvent.apply(self, []);
				}
				return;
			});
			$(document).on('click.Layer', self.opts.rightBtn, function() {
				if(typeof self.opts.rightBtnEvent === 'function') {
					self.opts.rightBtnEvent.apply(self, []);
				}
				return;
			}); 

		}
	};

	return coverLayer;
}));