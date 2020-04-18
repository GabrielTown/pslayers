let infiniteFadeOn = false;

function fadeOut(section, doNotFade, id) {
	if (!infiniteFadeOn) {
		//get an array of each element of section
		const fade = Array.from(document.querySelectorAll(`.${section}`));
		//get an array of each element to zoom/unfade
		const noFade = Array.from(document.querySelectorAll(`.${doNotFade}`));

		//add faded class to each element in section
		fade.forEach(element => element.classList.add('faded'));
		//delete faded class from elements not faded
		noFade.forEach(element => element.classList.remove('faded'));
		//add zoom class to not faded elements
		noFade.forEach(element => element.classList.add('zoom'));

		//once mouse leaves the keyword remove all classes just added as long as infinite fade is not on
		document.getElementById(id).addEventListener("mouseout", () => {
			!infiniteFadeOn && fade.forEach(element => element.classList.remove('faded', 'zoom'));
		}, false);
	}
	console.log(infiniteFadeOn);
}

//basically the same as fadeout function, but want to show the text and what to click until the user clicks it
function infiniteFade(section, doNotFade, doNotFade2) {
	infiniteFadeOn = true;
	console.log(infiniteFadeOn);
	const fade = Array.from(document.querySelectorAll(`.${section}`));
	const noFade = Array.from(document.querySelectorAll(`.${doNotFade}`));
	const sentence = document.querySelector(`.${doNotFade2}`);

	fade.forEach(element => element.classList.add('faded'));
	noFade.forEach(element => element.classList.remove('faded'));
	noFade.forEach(element => element.classList.add('noZoom'));

	sentence.classList.remove('faded');

	noFade.forEach(element => element.addEventListener("click", removeInfiniteFade));

	//remove fade and zoom
	function removeInfiniteFade() {
		fade.forEach(element => element.classList.remove('faded', 'noZoom'));
		infiniteFadeOn = false;
	}
}

