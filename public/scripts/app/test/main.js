require(['dialog', 'jquery', 'jqExtend', 'formRadio', 'formChecbox'], function(Dialog) {
	
	var test = {
		init: function() {
			var self = this;

			self.initEls();
			self.initAttrs();
			self.initComponent();
			self.initEvents();
		},

		initEls: function() {
			var self = this;
			self.$telephone = $('input[name="telphone"]');
			self.$file = $('input[name="file"]');
			self.$telBtn = $('[data-action="getVerifyCode"]');
			self.$fileText = self.$file.parent().siblings('.uploadText');
			self.$form = $('#apply-form');
			self.$allInput = self.$form.find('input, textarea');

			self.$submitBtn = $('a[data-action="submit"]');
		},

		initAttrs: function() {
			var self = this;

			self.telReg = /^[1]\d{10}$/;
			self.verifyTime = 60;
		},

		initComponent: function() {
			var self = this;
			self.$allInput.initPlaceHolder();
		},

		initEvents: function() {
			var self = this;

			self.$telBtn.on('click', function() {
				self.getVerifyCode(self.$telephone, $(this));
			});
			self.$file.on('change', function() {
				self.setFilename($(this));
			})
		},

		verifyTelphone: function($this) {
			var self = this;

			var val = $.trim($this.val());

			if(val.length === 0) {return;}
			if(!self.telReg.test(val)) {
				return false;
			}
			return true;
		},

		getVerifyCode: function($input, $this) {
			var self = this,
				params = {};

			if($this.hasClass('disabled')) {return;}
			if(!self.verifyTelphone($input)) {
				console.log('error');
				return;
			}
			params = {telphone: $.trim($input.val())};
			self.ToggleBtn();
			/*ajax.invoke({
				url: '',
				type: 'GET',
				dataType: 'json',
				data: params,
				beforeSend: function() {

				},
				success: function() {

				},
				error: function() {

				},
				complete: function() {

				}

			})*/
		},

		ToggleBtn: function() {
			var self = this;

			self.$telBtn.addClass('disabled');
			self.loadTime();
			
		},

		loadTime: function() {
			var self = this,
				time = self.verifyTime || 60,
				tipText = time + 's可重新发送';

			self.$telBtn.text(tipText);
			var timer = setInterval(function() {
				time--;
				tipText = time + 's可重新发送';
				self.$telBtn.text(tipText);
				if(time === 0) {
					clearInterval(timer);
					self.$telBtn.removeClass('disabled').text('获取验证码');
				}
			}, 1000);
			
		},

		setFilename: function($this) {
			var self = this,
				pureFileName = $.trim($this.val()).split('\\');
	
			self.$fileText.text(pureFileName[pureFileName.length-1]);
		}
	};

	test.init();
});