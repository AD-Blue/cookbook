import React from 'react'

export default function Navbar() {
    return (
        <div className="border-b-4 border-gray-900 mx-8">
            <nav className="flex justify-between pr-4 py-4 text-lg">
                <p className="pl-4">9CookBook</p>
                <form>
                    <label for="search">
                        <input id="search" type="text" />
                    </label>
                </form>
                <div className="flex flex-row divide-x divide-gray-900">
                    <p className="px-6">Home</p>
                    <p className="px-6">All Recipes</p>
                    <p className="px-6">Create Your Own</p>
                </div>
            </nav>
        </div>
    )
}
