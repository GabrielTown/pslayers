/*$(function () {
	$('[data-toggle="sidebar"]').popover({
		placement : 'auto',
		trigger: 'hover',
		html : true,
		content: '<div class="media mx-auto"><a href="#" class="pull-right"><img src="pics/intro/side-bar-intro.jpg" width=100%" class="media-object mx-auto" alt="Sample Sidebar"></a></div>'
	})
});*/
$(function () {
	$('[data-toggle="threeLayers"]').popover({
		placement : 'auto',
		trigger: 'click',
		html : true,
		content: '<div class="media mx-auto"><a href="#" class="pull-up"><img src="pics/popovers/layersidebar.jpg" width="100%" class="media-object mx-auto" alt="Sidebar Layers"></a></div>'
	})
});

$(function () {
	$('[data-toggle="eye"]').popover({
		placement : 'auto',
		trigger: 'click',
		html : true,
		content: '<div class="media mx-auto"><a href="#" class="pull-up"><img src="pics/popovers/eyes.jpg" width="100%" class="media-object mx-auto" alt="Sidebar Eyes"></a></div>'
	})
});

$(function () {
	$('[data-toggle="checkered"]').popover({
		placement : 'auto',
		trigger: 'hover',
		html : true,
		content: '<div class="media mx-auto"><a href="#" class="pull-up"><img src="pics/popovers/checkered.jpg" width="100%" class="media-object mx-auto" alt="Checkered Pattern"></a></div>'
	})
});

$(function () {
	$('[data-toggle="opacity"]').popover({
		placement : 'auto',
		trigger: 'click',
		html : true,
		content: '<div class="media mx-auto"><a href="#" class="pull-up"><img src="pics/popovers/opacitySidebar.jpg" width="100%" class="media-object mx-auto" alt="Sidebar Opacity"></a></div>'
	})
});