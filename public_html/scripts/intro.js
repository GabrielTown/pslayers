const  introLayer2 = document.getElementById('in-sb-l2');
const  introLayer1 = document.getElementById('in-sb-l1');
const  introLayer0 = document.getElementById('in-sb-l0');

function layerSwitch(layer) {
	if (layer === 'on') {
		return layer = 'off'
	} else {
		return layer = 'on'
	}
}

function setDisplayImage() {
	if (introLayer0.addEventListener('click') === true) {
		layer0 = layerSwitch(layer0);
		if (layer0 === 'on') {
			//change layer0 sidebar image to on

			if (layer1 === 'on' && layer2 === 'on') {
				//set image to original
			} else if (layer1 === 'on' && layer2 === 'off') {
				//set image to faceGone
			} else if (layer1 === 'off' && layer2 === 'on') {
				//set image to greenGone
			} else {
				//set image blueOnly
			}
		} else if (layer0 === 'off') {
			//change layer0 sidebar image to off

			if (layer1 === 'on' && layer2 === 'on') {
				//set image to blueGone
			} else if (layer1 === 'on' && layer2 === 'off') {
				//set image to greenOnly
			} else if (layer1 === 'off' && layer2 === 'on') {
				//set image to faceOnly
			} else {
				//set image to allGone
			}
		}
	} //end of layer0 click
	else if (introLayer1.addEventListener('click') === true) {

	} //end of layer1 click
} // end of setDisplayImage
