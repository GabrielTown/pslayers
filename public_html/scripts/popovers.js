$(function () {
	$('[data-toggle="sidebar"]').popover({
		placement : 'auto',
		trigger: 'hover',
		html : true,
		content: '<div class="media mx-auto"><a href="#" class="pull-right"><img src="pics/intro/side-bar-intro.jpg" width=100%" class="media-object mx-auto" alt="Sample Sidebar"></a></div>'
	})
});


$(function () {
	$('[data-toggle="clippy"]').popover({
		placement : 'auto',
		trigger: 'hover',
		html : true,
		content: '<div class="media mx-auto"><a href="#" class="pull-up"><img src="pics/popovers/clippy.jpg" width="100%" class="media-object mx-auto" alt="Cool Car Bro"></a></div>'
	})
});

$(function () {
	$('[data-toggle="crap"]').popover({
		placement : 'auto',
		trigger: 'hover',
		html : true,
		content: '<div class="media mx-auto"><a href="#" class="pull-up"><img src="pics/popovers/coolcarbro.png" width="100%" class="media-object mx-auto" alt="Cool Car Bro"></a></div>'
	})
});

