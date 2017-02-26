const express     	= require('express');
const bodyParser  	= require('body-parser');
const morgan      	= require('morgan');
const mongoose		= require('mongoose');

const app 			= express();
const config 		= require('./config');
const apiRoutes 	= require('./routes');

/*-----------------------------------
			configuration
------------------------------------*/
const port = process.env.PORT || 4000; 	// used to create, sign, and verify tokens

mongoose.connect(config.database); 		// connect to database

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));					// use morgan to log requests to the console


/*----------------------------------
			routes
-----------------------------------*/
app.use('/api', apiRoutes);				// apply the routes to our application with the prefix /api


/*----------------------------------
			Server Config
-----------------------------------*/
app.listen(port);
console.log('Server started at http://localhost:' + port);