function addFlash(imageId){
	const image = document.getElementById(imageId);
	image.classList.add('flash');

		image.addEventListener('animationend', function() {
			image.classList.remove("flash")
	});
}

function removeClass(elementId){
	elementId.removeAttribute("class");
}

function addInfiniteFlash(imageId) {
	const image = document.getElementById(imageId);
	image.classList.add('infiniteFlash');
	image.addEventListener('mouseenter', function () {
		image.classList.remove("infiniteFlash");
	});
}