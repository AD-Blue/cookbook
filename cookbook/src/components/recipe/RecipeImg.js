import React from 'react'
import logo from '../../assets/Burger.jpeg';

export default function RecipeImg() {
    return (
        <div className="px-6 w-1/4">
            <img src={logo} alt="recipe image" />
            <p>Recipe Name Placeholder</p>
        </div>
    )
}
