import React from 'react'
import RecipeBody from './RecipeBody';
import RecipeImg from './RecipeImg';

export default function Recipe() {
    return (
        <div className="flex flex-row">
            <RecipeImg />
            <RecipeBody />
        </div>
    )
}
