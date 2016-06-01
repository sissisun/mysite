(function(fn) {
	if(typeof require === 'function') {
		require([], fn);
	} else {
		fn();
	}
}(function() {
	var $ = window.jQuery;

	$(function($) {
		$(document).off('click.formCheckBox');
		$(document).on('click.formCheckBox', '.form-checkbox', function(e) {
			var $this = $(this);

			if($this.hasClass('disabled')) {return;}
			if($this.hasClass('checked')) {
				$this.removeClass('checked indeterminate');
			} else {
				$this.removeClass('indeterminate').addClass('checked');
			}

			$this.trigger('evtChange');
		});
	});
}))