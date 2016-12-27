'use strict';

const PORT = process.env.PORT || 3000;
process.env.MONGODB_URI = 'mongodb://localhost/recipe';

const expect = require('chai').expect;
const request = require('superagent');
const Recipe = require('../model/recipe');
require('../server');

const url = `http://localhost:${PORT}`;
const testRecipe = {
  name: 'pie',
};

describe('testing route /api/recipe', function(){
  describe('testing POST requests', function(){
    describe('has valid body', function(){
      after(done => {
        if(this.testRecipe){
          Recipe.remove({}) //removes all recipes from test db
          //we pass in an empty object because of queries
          .then(() => done())
          .catch(done);
          return;
        }
        done();
      });
      it('should return a recipe', done => {
        request.post(`${url}/api/recipe`)
        .send(testRecipe)
        .end((err, res) => {
          if(err) return done(err);
          expect(res.status).to.equal(200);
          expect(res.body.name).to.equal('pie');
          this.testRecipe = res.body;
          done();
        });
      });
    });
  });
});
