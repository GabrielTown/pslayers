function addFlash(imageId){
	const image = document.getElementById(imageId);
	image.classList.add('flash');

	image.addEventListener('animationend', function() {
		image.classList.remove("flash")
	});
}
