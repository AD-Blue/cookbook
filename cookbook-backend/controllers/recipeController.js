const Recipe = require('../models/Recipe');

exports.getRecipes = async (req, res, next) => {
    try {
        res.status(200).send("GET Recipe");
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}