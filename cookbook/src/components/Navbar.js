import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav>
                <form>
                    <label for="search">
                        <input id="search" type="text" />
                    </label>
                </form>
                <p>Home</p>
                <p>All Recipes</p>
            </nav>
        </div>
    )
}
