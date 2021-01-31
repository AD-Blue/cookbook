import React, { useContext, useEffect } from 'react';
import { Grid, GridItem, Image, Box, Text, Flex, UnorderedList, OrderedList, ListItem } from '@chakra-ui/react';
import RecipeCard from './RecipeCard';
import { GlobalContext } from '../../Context/GlobalState';

export default function RecipeList() {
    const { recipes, getRecipes } = useContext(GlobalContext);

    useEffect(() => {
        getRecipes();
    }, [])

    return (
        <Box>
            {recipes.slice(0).reverse().map((recipe) => (
                <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
        </Box>
    )
}
