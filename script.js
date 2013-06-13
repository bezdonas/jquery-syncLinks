(function($) {

	// Синхронизирует ховер у всех ссылок ведущих на одинаковую страницу внутри вызывающего контейнера
	// Посредством класса hover (нужно прописать в цсс)
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
				.on('mouseover', cont, function() {
					brothers.addClass(hoverClass);
				})
				.on('mouseleave', cont, function() {
					brothers.removeClass(hoverClass);
				});

		});

	}

})(jQuery);
