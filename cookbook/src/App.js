import React from 'react'
import Navbar from './components/Navbar';
import Recipe from './components/recipe/Recipe';

export default function App() {
    return (
        <div>
            <Navbar />
            <div className="pt-28">
                <Recipe />
            </div>
        </div>
    )
}