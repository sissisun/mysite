(function(fn) {
	if(typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = fn();
	} else if(typeof define === 'function' && define.amd) {
		define(['jquery'], fn)
	} else {
		fn();
	}
}(function() {
	var defaultOpts = {
		leftPadding: 50,
		topPadding: 50,
		imageMargin: 10,
		headerHeight: 50,
		lineHeight: 162,
		rotateDeg: 360,
		delayTime : 1000,
		wrapper: '#photo-content',
		imageTemplFun: null,
		getPhotoArr: null
	};

	var photoWard = function(opts) {
		this.opts = $.extend(true, {}, defaultOpts, opts || {});
		this.init();
	};

	photoWard.prototype = {
		init: function() {
			var self = this;

			self.initElements();
			self.initAttrs();
			self.setImageTemplate();
			self.getPhotoSrc();
			self.initEvents();
			self.renderPhotos();
		},

		initElements: function() {
			var self = this;

			self.$photoContent = $(self.opts.wrapper);
		},

		initAttrs: function() {
			var self = this;

			self.$imgs =[];
			self.photoArr = [];
			self.originalHeight = self.$photoContent.height();
			self.firstLoad = true;
		},

		initEvents: function() {
			var self = this;

			$(window).resize(self.debounce(function() {
				if(self.firstLoad) {
					self.resizePhotos();
				} else {
					self.afterFirstClick();
				}
				
			},200));
			$(document).one('click', 'img', function() {
				self.firstLoad = false;
				self.afterFirstClick();
				setTimeout(function() {
					self.initHoverEvent();
				}, 1000);
			});
		},

		initHoverEvent: function() {
			var self = this;

			$('img').hover(function() {
				console.log(444)
			}, function() {
				console.log(34);
			})
		},

		setImageTemplate: function() {
			var self = this;

			if(self.opts.imageTemplFun && typeof self.opts.imageTemplFun === 'function') {
				self.opts.imageTemplFun.apply(null, []);
			}
		},

		getPhotoSrc: function() {
			var self = this,
				strPath='styles/images/';

			if(self.opts.getPhotoArr && typeof self.opts.getPhotoArr === 'function') {
				self.opts.getPhotoArr.apply(null, []);
				return;
			}

			for(var i=1;i<20 && self.photoArr.push((function(j){return strPath+j+'.jpg';})(i));i++);

		},

		calculateCenterPoint: function($img) {
			var self = this;

			return {
				x: self.$photoContent.outerWidth()/2,
				y: self.$photoContent.outerHeight()/2,
			};
		},

		renderPhotos: function() {
			var self = this;

			for(var i=0; i<self.photoArr.length; i++) {
				var $img = $('<img />').attr('src', self.photoArr[i]),
					angle = self.opts.rotateDeg/self.photoArr.length;
					self.$imgs.push($img);
				

				(function(j) {
					$img.load(function() {
						self.$photoContent.append($(this));
						var pos = self.calculateCenterPoint($(this));
						$(this).css({
							transform: 'rotate('+ j * angle + 'deg)',
							zIndex: j,
							left: pos.x,
							top: pos.y
						});
					})	
				})(i);
			}
		},

		resizePhotos: function() {
			var self = this;

			var $imgs = self.$imgs;

			for(var i = 0; i < $imgs.length; i++) {
				var pos = self.calculateCenterPoint($imgs[i]);
				$imgs[i].css({
					left: pos.x,
					top: pos.y
				})
			}
		},

		afterFirstClick: function() {
			var self = this;

			var $imgs = self.$imgs,
				allWidth = 0, topSize = 0, leftSize = 0, allHeight = 0,
				leftPadding = self.opts.leftPadding,
				topPadding = self.opts.topPadding + self.opts.headerHeight,
				imageMargin = self.opts.imageMargin,
				lineHeight = self.opts.lineHeight;

			for(var i = 0; i < $imgs.length; i++) {
				allWidth += $imgs[i].outerWidth() + imageMargin;
				allHeight += $imgs[i].outerHeight();
				if(allWidth - imageMargin > self.$photoContent.width()) {
					topSize++;
					leftSize = 0;
					allWidth = $imgs[i].outerWidth() + imageMargin;
				}

				$imgs[i].animate({
					left: leftPadding + allWidth - $imgs[i].outerWidth() - imageMargin,
					top: topPadding + topSize * lineHeight
				},self.opts.delayTime).css({
					transform: 'rotate('+ 0 +'deg)'
				});

				leftSize++;
			}

			self.$photoContent.height(topSize * lineHeight > self.originalHeight ? topSize * lineHeight + topPadding : self.originalHeight);
		},

		debounce:function(fun,wait,immediate){
			var timer;
			return function(){
				var args=arguments,context=this,
					later=function(){
						timer=null;
						
						if(!immediate){
							fun.apply(context || this,args);
						}
					};
				var callNow=!timer && immediate;
				clearTimeout(timer);
				timer=setTimeout(later,wait);
				if(callNow){
					fun.apply(context,args);
				}
			};
		}
	};

	return photoWard;
}));