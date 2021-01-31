import React, { useContext, useEffect } from 'react';
import burger from '../../assets/burger.jpeg'
import { Grid, GridItem, Image, Box, Text } from '@chakra-ui/react';
import RecipeText from './RecipeText';
import { GlobalContext } from '../../Context/GlobalState';

export default function Recipe() {
    const { recipe, getRecipe } = useContext(GlobalContext);

    const id = '601602a912ee4f0dc81ef613'

    useEffect(() => {
        getRecipe(id)   //Placeholder until I get routing and stuff working lmao
    }, [id])

    return (
        <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="1fr 3fr"
            gap={2}
            w="80%"
        >
            <GridItem pt="2.5rem">
                <Image 
                    src={burger} 
                    boxSize="275px" 
                    fit="cover" 
                    position="relative" 
                    borderRadius="full"
                    
                    m="auto"
                />
            </GridItem>

            <GridItem rowSpan={2}>
                <RecipeText />
            </GridItem>

            <GridItem>
                <Text fontSize="2.2rem" textAlign="center" lineHeight="1.3em">{recipe.title}</Text>
            </GridItem>
            
        </Grid>
    )
}