module.exports = app => {
	apiRoutes.get('/', function(req, res) {
	  res.json({ message: 'Welcome to the coolest API on earth!' });
	});
};