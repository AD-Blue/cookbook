const express = require('express');
const router = express.Router();
const { getRecipes, addRecipe, deleteRecipe } = require('../controllers/recipeController');

router.route('/').get(getRecipes).post(addRecipe);

router.route('/:id').delete(deleteRecipe);

module.exports = router;