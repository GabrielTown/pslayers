$(document).ready(function () {
	$('#splash').css('opacity', '0.5'); // doing this with jQuery for ease

// Stopping a loop
	for ( var i = 0; i < 5000; i++ ) {
		if ( i==5000 ) {
			// here are the basics, just like your existing code
			$("#splash").click(function () {
				$("#splash").fadeOut("slow"); // you could also use $(this).fadeOut('slow');
			}
		}
	});
});