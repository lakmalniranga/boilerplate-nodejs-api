const apiRoutes 	= require('express').Router();

const middleware 	= require('./middleware');
const auth 			= require('./auth');
const test 			= require('./test');

apiRoutes.get('/', (req, res) => {
  res.status(200).json({ message: 'API is working!' });
});

apiRoutes.use('/auth', auth);
apiRoutes.use('/test',middleware, test);

module.exports = apiRoutes;