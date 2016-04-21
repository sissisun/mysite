require(['react','bootstrap','jquery','navBar','articleForm','footer','canvas_clock'], function(React) {
	
	var note = {

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

			self.headerLink.eq(2).addClass('active');
		}
	};

	note.init();
});