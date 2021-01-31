import React from 'react'
import Navbar from './components/Navbar';
import Recipe from './components/recipe/Recipe';
import { Center } from "@chakra-ui/react";
import Footer from './components/Footer';
import { GlobalProvider } from './Context/GlobalState';

export default function App() {
    return (
        <GlobalProvider>
            <Navbar />
            <Center>
                <Recipe />
            </Center>
            <Footer />
        </GlobalProvider>
    )
}
