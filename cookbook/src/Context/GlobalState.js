import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    recipes: [],
    recipe: {},
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getRecipes() {
        try {
            const res = await axios.get('api/recipes');

            dispatch({
                type: 'GET_RECIPES',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'RECIPE_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function getRecipe(id) {
        try {
            const res = await axios.get(`/api/recipes/${id}`);

            dispatch({
                type: 'GET_RECIPE',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'RECIPE_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function deleteRecipe(id) {
        try {
            await axios.delete(`api/recipes/${id}`);

            dispatch({
                type: 'DELETE_RECIPE',
                payload: id
            })
        } catch (err) {
            dispatch({
                type: 'RECIPE_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function addRecipe(recipe) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/recipes', recipe, config);

            dispatch({
                type: 'ADD_RECIPE',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'RECIPE_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function updateRecipe(recipe) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        try {
            const res = await axios.put(`/api/recipes/update/${recipe._id}`, recipe, config);

            dispatch({
                type: 'UPDATE_RECIPE',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'RECIPE_ERROR',
                payload: err.response.data.error
            })
        }
    }

    return (<GlobalContext.Provider value = {{
        recipes: state.recipes,
        recipe: state.recipe,
        error: state.error,
        loading: state.loading,
        getRecipes,
        getRecipe,
        deleteRecipe,
        updateRecipe,
        addRecipe
    }}>
        {children}
    </GlobalContext.Provider>)
}