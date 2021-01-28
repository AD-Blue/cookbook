import React from 'react'

export default function Navbar() {
    return (
        <div className="">
            <nav className="">
                <p className="">9CookBook</p>
                <form>
                    <label for="search">
                        <input id="search" type="text" />
                    </label>
                </form>
                <div className="">
                    <p className="">Home</p>
                    <p className="">All Recipes</p>
                    <p className="">Create Your Own</p>
                </div>
            </nav>
        </div>
    )
}
