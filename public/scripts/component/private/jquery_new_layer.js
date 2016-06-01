/*	
	所有的参数name必须，可以开多个，名字必须不同
	打开层：layer.open({
		message: 放进层的内容,
		name: 层的名字,
		speed: 打开层关闭层动画的速度,
		baseZ: 层的z-index，
		onBeforeOpen: 层打开之前的回调函数,
		onAfterOpen: 层打开之后的回调函数,
		onBeforeClose:  层关闭之前的回调函数,
		onAfterClose: 层关闭之后的回调函数,
	});
	关闭层： layer.close({
		name: '' //必须
	});关闭层并移除层元素
*/

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
		message: '',
		name: '',
		baseZ: 1100,
		speed: 300,
		layerWrapper: 'body',
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


	var Layer = {
		openLayers: {},
		open: function(opts) {
			var self = this;

			if(!opts.name) {return}
			if(self.openLayers[opts.name]) {
				console.log('该层已创建');
				return;
			}
			self.openLayers[opts.name] = new CoverLayer(opts);
		},
		close: function(opts) {
			var self = this;

			if(!opts.name) {return}
			if(!self.openLayers[opts.name]) {return;}
			self.openLayers[opts.name].close();
			delete self.openLayers[opts.name];
		},
		setLayerPosition: function(opts) {
			var self = this;

			if(!opts.name) {return}
			if(!self.openLayers[opts.name]) {return;}
			self.openLayers[opts.name].setLayerPosition();
		}
	}

	var CoverLayer = function(opts) {
		this.opts = $.extend(true, {}, defaultOpts, opts);
		this.init();
	}
	
	CoverLayer.prototype = {
		init: function() {
			var self = this;

			self.initAttr();
			self.open();
		},
		initAttr: function() {
			var self = this;

			self.currentLayerId = '';
			self.layers = [];
			self.layerContent = [];
			self.layerBtns = [];
			self.count = 0;
		},
		create: function() {
			var self = this,
				layer1, layer2;

			if(self.opts.layerWrapper === 'body') {
				layer1 = $('<div class="overLayer" style="display: none; position: fixed; z-index:'+ self.opts.baseZ++ +'; margin: 0; padding: 0; width: 100%;height: 100%; top:0; left: 0;opacity: 0.5;filter: alpha(opacity=50); background-color: #000"></div>');
				layer2 = $('<div class="contentLayer" style="display: none; position: fixed; z-index: '+ self.opts.baseZ++ +'; margin: 0; padding: 0; width: 100%;height: 100%; top:0; left: 0;"></div>');
			} else {
				layer1 = $('<div class="overLayer" style="display: none; position: absolute; z-index:'+ self.opts.baseZ++ +'; margin: 0; padding: 0; width: 100%;height: 100%; top:0; left: 0;opacity: 0;filter: alpha(opacity=0); background-color: #000"></div>');
				layer2 = $('<div class="contentLayer" style="display: none; position: absolute; z-index: '+ self.opts.baseZ++ +'; margin: 0; padding: 0; width: 100%;height: 100%; top:0; left: 0;"></div>');
			}

			self.layers = [layer1, layer2];

			$.each(self.layers, function() {
				this.attr('data-layer', self.opts.currentLayerId);
				$(self.opts.layerWrapper).append(this);
			});

			if(self.opts.message) {
				var wrapDiv = $('<div class="contentWrapper" style="position:absolute"></div>');
				$(layer2).empty().append(wrapDiv);
				$(self.opts.message).appendTo(wrapDiv);
				self.layerContent.push($(wrapDiv));
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
				self.layerBtns.push($(leftBtnHtml));
			}
			if(self.opts.needRightBtn) {
				var rightBtnHtml = $('<a href="javascript:;" style="display: block; position:absolute; right: 20px; top: 50%; color: #fff; text-decoration: none;" data-action="right"><span class="icon-angle-right icon-4x"></span></a>');
				$(layer2).append(rightBtnHtml);
				self.layerBtns.push($(rightBtnHtml));
			}
			self.initEvents();
			
		},
		open: function(opts) {
			var self = this;

			if(self.opts.currentLayerId) {
				console.log('该层已创建！');
				return;
			}

			try {
				this.create(opts);
			} catch (e) {
				 console.log('创建层失败');
				return;
			}

			if(typeof self.opts.onBeforeOpen === 'function') {
				self.opts.onBeforeOpen.apply(self, [self.opts]);
			}

			self.show();
		},
		show: function() {
			var self = this,
				layers = self.layers;

			$.each(layers, function(index) {
				$(this).fadeIn(self.opts.speed);
				if(index === layers.length-1) {
					self.setLayerPosition();
					self.setBtnsPosition();
				}
			});
			if(typeof self.opts.onAfterOpen === 'function') {
				self.opts.onAfterOpen.apply(self, [self.opts]);
			}
		},
		remove: function() {
			var self = this;		
			$.each(self.layers, function() {
				this.remove();
			});
			self.reset();
		},
		reset: function() {
			var self = this,
				spaceName = '.' + self.opts.name;

			self.currentLayerId = '';
			self.layers = [];
			self.layerContent = [];
			self.layerBtns = [];
			$(window).off('resize' + spaceName);
			$(document).off('click' + + spaceName);
		},
		close: function() {
			var self = this,
				layers = self.layers;

			if(typeof self.opts.onBeforeClose === 'function') {
				self.opts.onBeforeClose.apply(self, []);
			}
			$.each(layers, function(index) {
				this.fadeOut(self.opts.speed, function() {
					if(index === layers.length-1) {
						self.remove();
						delete Layer.openLayers[self.opts.name];
					}
				});
			});

			if(typeof self.opts.onAfterClose === 'function') {
				self.opts.onAfterClose.apply(self, []);
			}

		},
		setLayerPosition: function() {
			var self = this,
				layer = self.layerContent[0],
				wrapDom = self.opts.layerWrapper === 'body' ? window : self.opts.layerWrapper;
			
			layer.css({
				left: $(wrapDom).outerWidth()/2 - layer.outerWidth()/2,
				top: $(wrapDom).outerHeight()/2 - layer.outerHeight()/2
			})
		},
		setBtnsPosition: function() {
			var self = this,
				btns = self.layerBtns;
			if(btns.length === 0) {return;}
			$.each(btns, function() {
				this.css({
					top: $(window).outerHeight()/2 - this.outerHeight()/2
				})
			})

		},
		initEvents: function() {
			var self = this,
				spaceName = '.' + self.opts.name;

			$(document).on('click' + spaceName, self.opts.closeBtn, function() {
				self.close();
			});
			$(window).on('resize' + spaceName, debounce(function() {
					self.setLayerPosition();
				}, 200)
			);

			$(document).on('click' + spaceName, self.opts.leftBtn, function() {
				if(typeof self.opts.leftBtnEvent === 'function') {
					self.opts.leftBtnEvent.apply(self, []);
				}
				return;
			});
			$(document).on('click' + spaceName, self.opts.rightBtn, function() {
				if(typeof self.opts.rightBtnEvent === 'function') {
					self.opts.rightBtnEvent.apply(self, []);
				}
				return;
			}); 

		}
	};

	return Layer;
}));