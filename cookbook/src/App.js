import React from 'react'
import Navbar from './components/Navbar';
import Recipe from './components/recipe/Recipe';
import { Center } from "@chakra-ui/react";
import Footer from './components/Footer';
import Create from './components/Create';
import { GlobalProvider } from './Context/GlobalState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RecipeList from './components/recipe/RecipeList';
import Update from './components/Update';
import Test from './components/Test';

export default function App() {
    return (
        <GlobalProvider>
            <Router>
                <Navbar />
            <Center>
                <Switch>
                    <Route exact path="/test">
                        <Test />
                    </Route>
                    <Route exact path="/">
                        <RecipeList />
                    </Route>
                    <Route exact path="/create">
                        <Create />
                    </Route>
                    <Route exact path="/:id">
                        <Recipe />
                    </Route>
                    <Route exact path="/update/:id">
                        <Update />
                    </Route>
                    
                </Switch>
            </Center>
            <Footer />
            </Router>
        </GlobalProvider>
    )
}
