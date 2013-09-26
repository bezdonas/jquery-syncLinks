(function($) {

	// Syncs links hover with equal href attribute inside calling container
	// It's done via 'hover' class, which must duplicate :hover effect in css
	$.fn.syncLinks = function(hoverClass) {

		var cont = $(this),
			hoverClass = hoverClass ? hoverClass : 'hover';

		if (cont.length === 0) {
			return false;
		}

		cont.find('a').each(function() {

			var elem = $(this),
				href = elem.attr('href'),
				brothers = cont.find('a[href="' + href + '"]');

			elem
				.off('mouseover.syncLinks')
				.off('mouseleave.syncLinks')
				.on('mouseover.syncLinks', cont, function() {
					brothers.addClass(hoverClass);
				})
				.on('mouseleave.syncLinks', cont, function() {
					brothers.removeClass(hoverClass);
				});

		});

	}

})(jQuery);
