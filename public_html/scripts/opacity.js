
	//let opactiyString = "opacity:" + opactiyPercent + "; -moz-opacity:" + opacity + "; filter:alpha(opacity=" + opacity + ")";
	//console.log(opactiyString);
	function opacityClick() {
		document.getElementById("op-sb-middle").src="pics/opacity/sb-op-middle-blank.jpg";
		/*<input type="range" id="opacity" name="Opacity"
				 min="0" max="100" value="100" step="1">*/
	}

	function getOpacityValue(opacity) {
		let opacityPercent = opacity/100;
	}

	function changeCircleOpacity() {
		document.getElementById("opacityCircle").style.opacity = opactiyPercent;
	}
