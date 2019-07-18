'use strict';

const mongoose = require('mongoose');

// What fields and constraints do we want?
const products = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});



module.exports = mongoose.model('products', products);