const express = require('express');
const router = express.Router();
const { getRecipes, addRecipe, deleteRecipe, getRecipe, updateRecipe } = require('../controllers/recipeController');

router.route('/').get(getRecipes).post(addRecipe);

router.route('/:id').delete(deleteRecipe).get(getRecipe).put(updateRecipe);

module.exports = router;