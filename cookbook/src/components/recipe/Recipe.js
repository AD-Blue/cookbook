import React from 'react';
import RecipeImg from './RecipeImg';
import RecipeText from './RecipeText';

export default function Recipe() {
    return (
        <div>
            <div>
                <RecipeImg />
            </div>
            <div>
                <RecipeText />
            </div>
        </div>
    )
}