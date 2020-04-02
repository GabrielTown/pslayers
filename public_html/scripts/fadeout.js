function fadeOut(section, doNotFade, id) {
	const fade = Array.from(document.querySelectorAll(`.${section}`));
	const noFade = document.querySelector(`.${doNotFade}`);

	fade.forEach(div => div.classList.add('faded'));
	noFade.classList.remove('faded');
	noFade.classList.add('zoom');

	document.getElementById(id).addEventListener("mouseout", removeFade, false);

	//remove fade and zoom
	function removeFade() {
		fade.forEach(div => div.classList.remove('faded', 'zoom'));
	}
}

function infiniteFade(section, doNotFade, doNotFade2) {
	const fade = Array.from(document.querySelectorAll(`.${section}`));
	const noFade = document.querySelector(`.${doNotFade}`);
	const noFade2 = document.querySelector(`.${doNotFade2}`);

	fade.forEach(div => div.classList.add('faded'));
	noFade.classList.remove('faded');
	noFade.classList.add('zoom');

	noFade2.classList.remove('faded');
	noFade2.classList.add('zoom');

	noFade.addEventListener("mouseenter", removeFade, false);

	//remove fade and zoom
	function removeFade() {
		fade.forEach(div => div.classList.remove('faded', 'zoom'));
	}
}

