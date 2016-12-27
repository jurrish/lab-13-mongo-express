'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const Recipe = require('../model/recipe');

const recipeRouter = module.exports = new Router();

recipeRouter.post('/api/recipe', jsonParser, function(req, res, next) {
  req.body.timestamp = new Date();
  new Recipe(req.body).save()//returns a promise
  .then(recipe => res.json(recipe))
  .catch(next);
});
