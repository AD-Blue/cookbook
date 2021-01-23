const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Your recipe needs a name!']
    },
    description: {
        type: String,
        required: [true, 'Your recipe needs a description!']
    }
})

module.exports = mongoose.model('Recipe', RecipeSchema);