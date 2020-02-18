let introLayer2 = document.getElementById('in-sb-l2');
let introLayer1 = document.getElementById('in-sb-l1');
let introLayer0 = document.getElementById('in-sb-l0');
let layer0 = 'on';
let layer1 = 'on';
let layer2 = 'on';


function layerToggle(layer) {
	if (layer === 'on') {
		return layer = 'off'
	} else {
		return layer = 'on'
	}
}

function onClick () {
	return 'true';
}

function layer0Click() {
	console.log("layer0 was clicked");
	//toggle layer 0
	layer0 = layerToggle(layer0);
	console.log(layer0);
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
} //end of layer0Click


function layer1Click(){
	console.log("layer1 was clicked");
	//toggle layer 1
	layer1 = layerToggle(layer1);
	console.log(layer1);
	if (layer1 === 'on') {
		//change layer1 sidebar image to on

		if (layer0 === 'on' && layer2 === 'on') {
			//set image to original

		} else if (layer0 === 'on' && layer2 === 'off') {
			//set image to faceGone

		} else if (layer0 === 'off' && layer2 === 'on') {
			//set image to blueGone

		} else {
			//set image greenOnly

		}
	} else if (layer1 === 'off') {
		//change layer1 sidebar image to off

		if (layer0 === 'on' && layer2 === 'on') {
			//set image to greenGone

		} else if (layer0 === 'on' && layer2 === 'off') {
			//set image to blueOnly

		} else if (layer0 === 'off' && layer2 === 'on') {
			//set image to greenOnly

		} else {
			//set image to allGone

		}
	}
} // end of layer1Click


function layer2Click() {
	console.log("layer2 was clicked");
	layer2 = layerToggle(layer2);
	console.log(layer2);
	if (layer2 === 'on') {
		//change layer2 sidebar image to on

		if (layer1 === 'on' && layer0 === 'on') {
			//set image to original
		} else if (layer1 === 'on' && layer0 === 'off') {
			//set image to blueGone
		} else if (layer1 === 'off' && layer0 === 'on') {
			//set image to greenGone
		} else {
			//set image faceOnly
		}
	} else if (layer2 === 'off') {
		//change layer2 sidebar image to off

		if (layer1 === 'on' && layer0 === 'on') {
			//set image to faceGone

		} else if (layer1 === 'on' && layer0 === 'off') {
			//set image to greenOnly

		} else if (layer1 === 'off' && layer0 === 'on') {
			//set image to blueOnly

		} else {
			//set image to allGone

		}
	}
} //end of layer2Click


/*
function setDisplayImage() {
	//check to see if layer0 was clicked
	if (introLayer0.addEventListener('click', onClick())) { //TODO figure out the logic for when a layer is clicked return true
		console.log("layer0 was clicked");
		//toggle layer 0
		layer0 = layerToggle(layer0);
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

	//check to see if layer1 was clicked
	else if (introLayer1.addEventListener('click') === true) {
		console.log("layer1 was clicked");
		//toggle layer 1
		layer1 = layerToggle(layer1);
		if (layer1 === 'on') {
			//change layer1 sidebar image to on

			if (layer0 === 'on' && layer2 === 'on') {
				//set image to original

			} else if (layer0 === 'on' && layer2 === 'off') {
				//set image to faceGone

			} else if (layer0 === 'off' && layer2 === 'on') {
				//set image to blueGone

			} else {
				//set image greenOnly

			}
		} else if (layer1 === 'off') {
			//change layer1 sidebar image to off

			if (layer0 === 'on' && layer2 === 'on') {
				//set image to greenGone

			} else if (layer0 === 'on' && layer2 === 'off') {
				//set image to blueOnly

			} else if (layer0 === 'off' && layer2 === 'on') {
				//set image to greenOnly

			} else {
				//set image to allGone

			}
		}
	} //end of layer1 click

	//layer2 was clicked
	else {
		console.log("layer2 was clicked");
		layer2 = layerToggle(layer2);
		if (layer2 === 'on') {
			//change layer2 sidebar image to on

			if (layer1 === 'on' && layer0 === 'on') {
				//set image to original
			} else if (layer1 === 'on' && layer0 === 'off') {
				//set image to blueGone
			} else if (layer1 === 'off' && layer0 === 'on') {
				//set image to greenGone
			} else {
				//set image faceOnly
			}
		} else if (layer2 === 'off') {
			//change layer2 sidebar image to off

			if (layer1 === 'on' && layer0 === 'on') {
				//set image to faceGone

			} else if (layer1 === 'on' && layer0 === 'off') {
				//set image to greenOnly

			} else if (layer1 === 'off' && layer0 === 'on') {
				//set image to blueOnly

			} else {
				//set image to allGone

			}
		}
	} //end of layer2 click
} // end of setDisplayImage
*/
