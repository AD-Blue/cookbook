const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Your recipe needs a name!']
    },
    description: {
        type: String,
        required: [true, 'Your recipe needs a description!']
    },
    ingredients: {
        type: [String],
        required: true
    },
    steps: {
        type: [String],
        required: true
    },
    img: {
        type: [String],
        required: true
    }
})

module.exports = mongoose.model('Recipe', RecipeSchema);