var handleMove = function (e) {
			var scrollable = false;
			var items = $(e.target).parents();
			$(items).each(function(i,o) {
				if($(o).hasClass("overthrow")) {
					scrollable = true;
				}
			});
			if(!scrollable)
				e.preventDefault();
		};
		document.addEventListener('touchmove', handleMove, true);