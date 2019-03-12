var wfc = require('wavefunctioncollapse');

var imgData = '' // let's pretend this is an ImageData retrieved from a canvas context in the browser

var model = new wfc.OverlappingModel(imgData.data, imgData.width, imgData.height, 3, 48, 48, true, true, 4);