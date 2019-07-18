'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require( './middleware/error.js');
const notFound = require( './middleware/404.js' );

// Custom Routes
const productsRoutes = require('../routes/poducts.js');
const categoriesRoutes = require('../routes/categories');

// Models

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.use(productsRoutes);
app.use(categoriesRoutes);



// Catchalls
app.use(notFound);
app.use(errorHandler);

// ROUTE HANDLER FUNCTIONS
// TODO: Pull these in (or create them)!
const categoriesModels = require('../models-modular/categories/categories');
app.use(categoriesModels);

const productModels = require('../models-modular/products/products.js');
app.use(productModels);






module.exports = {
  server: app,
  start: (port) => app.listen(port, () => console.log(`Server up on port ${port}`) ),
};
