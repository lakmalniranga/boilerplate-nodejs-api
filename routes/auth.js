const apiRoutes = require('express').Router();
const jwt    	= require('jsonwebtoken');

const config 	= require('../config');
const User   	= require('../models/user');

apiRoutes.post('/', function(req, res) {
	// find the user
	User.findOne({
	username: req.body.username
	}, function(err, user) {

		if (err) throw err;

		if (!user) {
		res.json({ success: false, message: 'Authentication failed. User not found.' });
		} else if (user) {

			// check if password matches
			if (user.password != req.body.password) {
			res.json({ success: false, message: 'Authentication failed. Wrong password.' });
			} else {

				// if user is found and password is right
				// create a token
				var token = jwt.sign(user, config.secret, {
				expiresIn: 1440 // expires in 1440 minutes-24 hours
				});

				// return the information including token as JSON
				res.json({
					success: true,
					message: 'Enjoy your token!',
					token: token
				});
			}   

		}
	});
});

module.exports = apiRoutes;