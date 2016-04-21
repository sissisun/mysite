require(['react','photoWard','bootstrap','jquery','navBar','footer'], function(React, PhotoWard) {
	
	var photo = {

		init: function() {
			var self = this;

			self.initElements();
			self.initComponent();
		},

		initElements: function() {
			var self = this;

			self.headerLink = $('.header-nav').find('li');
		},

		initComponent: function() {
			var self = this;

			self.photoWard = new PhotoWard();

			self.initHeaderBar();
		},

		initHeaderBar: function() {
			var self = this;

			self.headerLink.eq(3).addClass('active');
		}
	};

	photo.init();
});