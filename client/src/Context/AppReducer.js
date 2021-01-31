/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
    switch(action.type) {
        case 'GET_RECIPES':
            return {
                ...state,
                loading: false,
                recipes: action.payload
            }
        case 'GET_RECIPE':
            return {
                ...state,
                loading: false,
                recipe: action.payload
            }
        case 'DELETE_RECIPE':
            return {
                ...state,
                recipes: state.recipes.filter(recipe => recipe._id !== action.payload)
            }
        case 'ADD_RECIPE':
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }
        case 'RECIPE_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}