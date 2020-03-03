function addFlash(imageId) {
		const image = document.getElementById(imageId);
	image.classList.add('flash');

		image.addEventListener('animationend', function() {
			image.classList.remove("flash")
	});
}

function removeClass(elementId){
	elementId.removeAttribute("class");
}

function removeParagraph(paragraphId) {
	paragraphId.parentNode.removeChild(paragraphId);
}

function flashKeywords(keyOne, keyTwo, keyThree, keyFour) {
	document.getElementById(keyOne).classList.add('flash');
	document.getElementById(keyTwo).classList.add('flash');
	document.getElementById(keyThree).classList.add('flash');
	document.getElementById(keyFour).classList.add('flash');
}

function addInfiniteFlash(imageId) {
	const image = document.getElementById(imageId);
	image.classList.add('infiniteFlash');
	image.addEventListener('mouseenter', function () {
		image.classList.remove("infiniteFlash");
	});
}

function readMore(dotsId, moreId, readMoreId) {
	const dots = document.getElementById(dotsId);
	const moreText = document.getElementById(moreId);
	const btnText = document.getElementById(readMoreId);

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "View Full Text";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "View less";
		moreText.style.display = "inline";
	}
}