let rangeslider = document.getElementById("sliderOpacity");
let output = document.getElementById("opacityDisplayValue");
output.innerHTML = rangeslider.value;

rangeslider.oninput = function() {
	output.innerHTML = this.value;
	let opacityPercent = this.value/100;
	document.getElementById("opacityCircle").style.opacity = opacityPercent;
}
