const Recipe = require('../models/Recipe');

exports.getRecipes = async (req, res, next) => {
    try {
        const recipes = await Recipe.find();

        return res.status(200).json({
            success: true,
            data: recipes
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

exports.getRecipe = async (req, res, next) => {
    try {
        const recipe = await Recipe.findById(req.params.id);

        if(!recipe){
            return res.status(404).json({
                success: false,
                error: 'No such recipe found'
            });
        }

        return res.status(200).json({
            success: true,
            data: recipe
        })
    } catch (err) {
        return res.status(404).json({
            success: false,
            error: 'No such recipe found'
        });
    }
}

exports.addRecipe = async (req, res, next) => {
    try {
        const { title, description } = req.body;

        const recipe = await Recipe.create(req.body);

        return res.status(201).json({
            success: true,
            data: recipe
        })
    } catch (err) {
        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            }); //400 is client error 
        }
        else {
            return res.status(500).json({
                success: false,
                error: 'Server error'
            });
        }
    }
}

exports.deleteRecipe = async (req, res, next) => {
    try {
        const recipe = await Recipe.findById(req.params.id);

        if(!recipe) {
            return res.status(404).json({
                success: false,
                error: 'No such recipe found'
            });
        }

        await recipe.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}

exports.updateRecipe = async (req, res, next) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id);

        if(!recipe) {
            return res.status(404).json({
                success: false,
                error: 'Recipe not found'
            })
        }
        return res.status(200).json({
            success: true,
            data: recipe
        })

    } catch (err) {
        return res.status(404).json({
            success: false,
            error: 'No such recipe found'
        });
    }
}