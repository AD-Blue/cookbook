import React from 'react'
import Navbar from './components/Navbar';
import Recipe from './components/recipe/Recipe';
import { Center } from "@chakra-ui/react";
import Footer from './components/Footer';

export default function App() {
    return (
        <div>
            <Navbar />
            <Center>
                <Recipe />
            </Center>
            <Footer />
        </div>
    )
}
