var express     = require('express');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var consign     = require('consign');

var jwt    = require('jsonwebtoken');
var config = require('./config');
var User   = require('./models/user');

var app = express();
var apiRoutes = express.Router(); 

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 4000; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);

// =======================
// routes ================
// =======================

consign()
	.include('routes/basic/index.js')
	.then('routes/basic/setup.js')
	.then('routes/auth.js')
	.then('routes/middleware.js')
	.then('routes/index.js')
	.into(app);

// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);