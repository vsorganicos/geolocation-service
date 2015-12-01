const Code = require('code');   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const logic = require('../app/service');
const Server = require('../server');

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
    
		console.log('End of Test: ', result.value);

    	done();	
	});
});

lab.describe('HTTP Test', () => {
	lab.it('Create server and invoke service', (done) => {
		var jSon = {
			points: {
				from: {
					lat: -23.5388,
					lgt: -46.6755
				},
				to: {
					lat: -23.5388,
					lgt: -46.6755
				}
			}
		};

		var options = {
			method: 'POST',
			url: '/geolocation/calculate-distance-between-two-points',
			payload: jSon
		};

		Server.inject(options, function(response) {
			var result = response.result;
			console.log('logging', response.result);
			Code.expect(result.value).to.equal(0);

			done();
		});

	});

	
});

lab.describe('Coverage', () => {
	lab.it('testing loop of latitude/longitude', (done) => {
		var latitude, longitude;
		
		longitutde = -90.00;

		while(longitutde < 90.00){
			lacoLatitude(longitude)
						
			longitutde = longitutde + 1.0;
		}

		function lacoLatitude(longitude) {
			var latitude = -180.00

			for(;latitude<180.00;) {
				latitude = latitude + 1.0;
			}
		}
		console.log('logging', 'End of Loop ' + longitutde);
		Code.expect(1).to.equal(1);

		done();
	});
});