'use strict';

const Ingredient = require('../model/ingredient');

// module.exports = function(){
//   let ingredientSeeds = ['bacon', 'lettuce', 'tomato'];
//   console.log('seeding');
//   ingredientSeeds.forEach(ingredientName => {
//     Ingredient.create({name: ingredientName})
//       .then(() => {
//         Ingredient.find({}).then(r => console.log(r));
//       });
//   });
// };

module.exports = function() {
  let ingredientSeeds = [];
  if(ingredientSeeds.length === 0){
    let ingredientSeeds = ['bacon', 'lettuce', 'tomato'];
    ingredientSeeds.forEach(ingredientName => {
      new Ingredient({name: ingredientName}).save();
    });
  }
};
