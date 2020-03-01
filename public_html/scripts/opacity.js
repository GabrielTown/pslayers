let rangeslider = document.getElementById("sliderOpacity");
let output = document.getElementById("opacityDisplayValue");
output.innerHTML = rangeslider.value;

rangeslider.oninput = function() {
	output.innerHTML = this.value;
	let opacityPercent = this.value/100;
	document.getElementById("opacityCircle").style.opacity = opacityPercent;
};

function opacityClick() {
	document.getElementById("rangeSlider").style.display = "flex";
	document.getElementById("rangeSlider").style.borderLeft = "solid #707070";
	document.getElementById("op-sb-middle").style.display = "none";
}