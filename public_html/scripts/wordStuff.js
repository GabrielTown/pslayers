window.onload = typeWriter;

let i = 0;
const txt = "This is an interactive tutorial that will teach you three basics of Photoshop Layers: Visibility, Opacity, " +
	"and Blend Options. Hover over or click underlined and colored words for hints on where to go and what to do. Ready Go!";
const speed = 35;

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("opening").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}

//function to display more or less text
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