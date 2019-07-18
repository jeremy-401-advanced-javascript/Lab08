'use strict';

const Model = require('../mongo');
const schema = require('./products.schema');

class Products extends Model {
  constructor() {
    super();
    this.schema = schema;
  }
}

module.exports = Products;