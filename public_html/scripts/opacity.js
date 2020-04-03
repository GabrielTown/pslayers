const rangeSlider = document.getElementById("sliderOpacity");
const output = document.getElementById("opacityDisplayValue");
output.innerHTML = rangeSlider.value;

rangeSlider.oninput = function() {
	output.innerHTML = this.value;
	document.getElementById("opacityCircle").style.opacity = this.value / 100;
};

function opacityClick() {
	document.getElementById("rangeSlider").style.display = "flex";
	document.getElementById("rangeSlider").style.borderLeft = "solid #707070";
	document.getElementById("op-sb-middle").style.display = "none";
}