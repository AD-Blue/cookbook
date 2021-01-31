const express = require('express');
const router = express.Router();
const { getRecipes, addRecipe, deleteRecipe, getRecipe } = require('../controllers/recipeController');

router.route('/').get(getRecipes).post(addRecipe);

router.route('/:id').delete(deleteRecipe).get(getRecipe);

module.exports = router;