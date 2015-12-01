'use strict';

const logic = require('../service');
const Joi = require('joi');
const Boom = require('boom');

var routes = [];

var schema = Joi.object().keys({
	points: Joi.object().keys({
		from: Joi.object().keys({
			lat: Joi.number().min(-180).max(180).required(),
			lgt: Joi.number().min(-90).max(90).required(),
		}),
		to: Joi.object().keys({
			lat: Joi.number().min(-180).max(180).required(),
			lgt: Joi.number().min(-90).max(90).required(),
		})		
	})
});

routes.push({
	method: 'POST',
	path: '/geolocation/calculate-distance-between-two-points',
	handler: function (request, response) {
        var jSon = JSON.parse(request.payload);

        Joi.validate(jSon, schema, function(err, value) {
        	if(err) {
        		console.error('Invalid request', err);
        		return response(Boom.create(400, 'Bad Request', {message: err.name}));

        	}else {
	       		logic.calculateDistanceBetweenTwoPoints(jSon.points, function(result, err) {
					if(err) {
						return response(Boom.create(500, 'Error on calculate distance.', 
													{ timestamp: Date.now() }));
					}else {
						return response(result);
					}
				});
       		}
        });
        
	}
});

module.exports = routes;