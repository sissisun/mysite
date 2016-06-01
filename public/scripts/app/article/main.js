require(['react','coverLayer', 'bootstrap','jquery','navBar','banner','footer','articleList'], function(React) {
	
	var article = {

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

			self.headerLink.eq(1).addClass('active');
		}
	};

	article.init();
});