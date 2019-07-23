'use strict';

const mongoose = require('mongoose');

// What fields and constraints do we want?
const categories = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

// Do we need to run any lifecycle hooks/middleware?
// categories.post('findOne', function (doc) {
//   doc.name = doc.name.toUpperCase();
// });

// categories.post('init', function () {
//   // this.name = this.name.toUpperCase(); // <- this will break our tests (that's a good thing)
//   console.log(this);
// });

// categories.post('save', function () {
//   console.log('saving', this);
// })

module.exports = mongoose.model('categories', categories);
