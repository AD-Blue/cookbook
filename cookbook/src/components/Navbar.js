import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav>
                <p>9CookBook</p>
                <form>
                    <label for="search">
                        <input id="search" type="text" />
                    </label>
                </form>
                <div>
                	<p>Home</p>
                    <p>All Recipes</p>
                    <p>Create Your Own</p>
                </div>
            </nav>
        </div>
    )
}