/*	
	所有的参数都不是必须
	打开层：layer.open({
		title: 对话框的标题,
		type: 对话框的类型（info,ok,error,warn默认为info）,
		content: 对话框的内容,
		confirm: true（为true表示需要确认按钮，false不需要）,
		cancel: true（为true表示需要取消按钮，false不需要）,
		baseZ: 1500（对话框的z-index）,
		onCancel: 点击取消后的回调函数,
		onConfirm: 点击确定后的回调函数,
		beforeOpen: 对话框打开之前的回调函数,
		afterOpen: 对话框打开之后的回调函数
	});
*/

(function(fn) {
	if(typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = fn;
	} else if (typeof define === 'function' && define.amd) {
		define([],fn)
	} else {
		window.dialog = fn();
	}
}(function() {
	var defaultOpts = {
		title: '提示',
		type: 'info',
		content: '提示',
		confirm: true,
		cancel: true,
		baseZ: 1500,
		onCancel: null,
		onConfirm: null,
		beforeOpen: null,
		afterOpen: null
	};

	var debounce = function(fn, delayTime, immediate) {
		var timer;
		return function() {
			var args = arguments, context = this,
				later = function() {
					timer = null;

					if(!immediate) {
						fn.apply(context || this, args);
					}
				};
			var callNow = !timer && immediate;
			clearTimeout(timer);
			if(callNow) {
				fn.apply(context || this, args);
			} else {
				timer = setTimeout(later, delayTime);
			}
		}
	}

	var Dialog = function(opts) {
		this.opts = $.extend(true, {}, defaultOpts, opts || {});
		this.init();
	};

	Dialog.prototype = {
		init: function() {
			var self = this;

			self.create();
			self.open()
		},

		create: function() {
			var self = this;

			self.initComponent();
			self.initEls();
			self.initAttrs();
			self.initDialogHtml();
			self.initEvents();
		},

		initEls: function() {
			var self = this;

			self.$dialog = self.dialogTempl.eq(0);
			self.$confirmBtn = self.$dialog.find('a[data-action="confirm"]');
			self.$cancelBtn = self.$dialog.find('a[data-action="cancel"]');

			self.$title = self.$dialog.find('.dialog-title .text');
			self.$content = self.$dialog.find('.dialog-content .content-text .text');
		},

		initAttrs: function() {
			var self = this;

			self.id = new Date().getTime() + (Math.random()*10000).toFixed();
		},

		initComponent: function() {
			var self = this;

			self.overlayTempl = $('<div class="dialog-overlay" style="position: fixed; z-index:'+ self.opts.baseZ + '; width: 100%; height: 100%; top: 0; left: 0; background-color: #000; opacity: 0.5; filter: alpha(opacity=50);"></div>');
			self.dialogTempl = $('<div class="dialog" style="z-index:'+ self.opts.baseZ + '"><div class="dialog-title"><a href="javascript:;" class="close-btn" data-action="cancel"></a><span class="text">提示</span></div><div class="dialog-content"><div class="content-text"><span class="icon"></span><span class="text"></span></div></div><div class="dialog-btn-wrapper"><a href="javascript:;" class="btn" data-action="confirm">确定</a><a href="javascript:;" class="btn" data-action="cancel">取消</a></div></div>');
			self.layers = [self.overlayTempl, self.dialogTempl];
		},

		initEvents: function() {
			var self = this;

			$(document).on('click.'+self.id, 'a[data-action="confirm"]', function() {
				self.onConfirm();
			});
			$(document).on('click.'+self.id, 'a[data-action="cancel"]', function() {
				self.onCancel();
			});
			$(window).on('resize.'+self.id, debounce(function() {
					self.setLayerPosition();
				}, 200)
			);
		},

		initDialogHtml: function() {
			var self = this;

			if(!self.opts.confirm) {
				self.$confirmBtn.remove();
			}
			if(!self.opts.cancel) {
				self.$cancelBtn.not('.close-btn').remove();
			}
			if(self.opts.type !== 'info') {
				self.$dialog.addClass(self.opts.type);
			}
			self.$title.html(self.opts.title);
			self.$content.html(self.opts.content);
		},

		open: function() {
			var self = this;

			if(!self.layers) {return;}

			if(typeof self.opts.beforeOpen === 'function') {
				self.opts.beforeOpen.apply(self, []);
			}

			$.each(self.layers, function() {
				this.appendTo($('body'));
			});
			self.setLayerPosition();

			if(typeof self.opts.afterOpen === 'function') {
				self.opts.afterOpen.apply(self, []);
			}
		},

		setLayerPosition: function() {
			var self = this,
				$el = self.$dialog;

			self.$dialog.css({
				left: $(window).width()/2 - $el.width()/2,
				top: $(window).height()/2 - $el.height()/2
			})
		},

		onConfirm: function() {
			var self = this;

			self.close();
			if(typeof self.opts.onConfirm === 'function') {
				self.opts.onConfirm.apply(self, []);
			}
		},

		onCancel: function() {
			var self = this;

			self.close();
			if(typeof self.opts.onCancel === 'function') {
				self.opts.onCancel.apply(self, []);
			}
		},

		close: function() {
			var self = this;

			if(!self.layers) {return;}
			$.each(self.layers, function() {
				this.remove();
			});
			$(document).off('click.'+self.id);
			$(window).off('click.'+self.id);
			self.layers = [];
		}
	};

	return Dialog;
}))