require(['react','bootstrap','jquery','navBar', 'banner', 'thumbnailBox', 'footer'], function(React) {
	
	var home = {

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

			self.initHeaderBar();
		},

		initHeaderBar: function() {
			var self = this;

			self.headerLink.eq(0).addClass('active');
		}
	};

	home.init();
});