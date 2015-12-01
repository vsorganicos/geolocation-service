const Code = require('code');   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const logic = require('../app/service');

lab.test('Geolocation is greater than 0', (done) => {

	var points = {
		from : {
			lat: -23.5388,
			lgt: -46.6755
		},
		to : {
			lat: -23.5388,
			lgt: -46.6755
		}
	};

	logic.calculateDistanceBetweenTwoPoints(points, function(result, err) {
		Code.expect(result.value).to.equal(0);
    
    	done();	
	});
});

lab.describe('Coverage', () => {
	lab.it('testing loop of latitude/longitude', (done) => {
		console.log('Testing...');
		var latitude, longitude;

		
		longitutde = -90.00;

		while(longitutde < 90.00){
			lacoLatitude(longitude)
						
			longitutde = longitutde + 0.01;
		}

		function lacoLatitude(longitude) {
			var latitude = -180.00

			for(;latitude<180.00;) {
				console.log('latitude ' + latitude + ' longitutde ' + longitutde);
				console.log('---------------------------------------------------');
				
				latitude = latitude + 0.01;
			}
		}

		done();
	});
});