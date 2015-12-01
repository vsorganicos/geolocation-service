'use strict';

//Raio da Tera em KM
var r = 6372.795477598;

//fórmula de Haversine.
module.exports.calculateDistanceBetweenTwoPoints = function(points, callback) {
	var result = {value:0};

	try {
		var latFrom = toRad(points.from.lat);
		var latTo = toRad(points.to.lat);

		var deltaLat = toRad(points.to.lat - points.from.lat);
		var deltaLong = toRad(points.to.lgt - points.from.lgt);
		
		var a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) 
				+ Math.cos(latFrom) * Math.cos(latTo) * Math.sin(deltaLong/2) * Math.sin(deltaLong/2); 
		
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		
		var d = r * c * 1000;

		if(d>0) {
			result.value = parseFloat(d).toFixed(2);
		}else {
			result.value = d;
		}
		callback(result, null);	

	}catch(e) {
		console.error('Error on calculate distance between 2 points: ['+ JSON.stringify(points)+'] ' + e);
		callback(null, e);
	}
};

function toRad(value) {
	return (value * Math.PI) / 180;
}
