const apiRoutes = require('express').Router();

apiRoutes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connectedssssssssss!' });
});

module.exports = apiRoutes;