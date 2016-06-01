(function(fn) {
	if(typeof require === 'function') {
		require([], fn);
	} else {
		fn();
	}
}(function() {
	var $ = window.jQuery;

	$(function($) {
		$(document).off('click.formRadio');
		$(document).on('click.formRadio', '.form-radio', function(e) {
			var $this = $(this);

			if(!$this.hasClass('disabled') && !$this.hasClass('checked')) {
				var name = $this.attr('data-name');
				if(!name) {
					$this.addClass('checked').trigger('');
					return;
				}
				$('.form-radio[data-name=' + name + ']').not($this).removeClass('checked').trigger('evtUnchecked');
				$this.addClass('checked').trigger('evtChecked');
			}
		});
	});
}))