'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = Schema({
  name: {type: String, required: true},
  pageLength: {type: Number},
  objId: {type: mongoose.Schema.ObjectId, ref: 'recipe'}
});

module.exports = mongoose.model('ingredient', ingredientSchema);
