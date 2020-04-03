//display checkered pattern when hover over word
$(function () {
	$('[data-toggle="checkered"]').popover({
		placement : 'auto',
		trigger: 'hover',
		html : true,
		content: '<div class="media mx-auto"><a href="#" class="pull-up"><img src="pics/popovers/checkered.jpg" width="100%" class="media-object mx-auto" alt="Checkered Pattern"></a></div>'
	})
});


