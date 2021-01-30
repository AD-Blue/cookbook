import React from 'react';
import burger from '../../assets/burger.jpeg'
import { Grid, GridItem, Image, Box, Text } from '@chakra-ui/react';
import RecipeText from './RecipeText';

export default function Recipe() {
    return (
        <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="1fr 3fr"
            gap={2}
            w="80%"
        >
            <GridItem>
                <Image 
                    src={burger} 
                    boxSize="275px" 
                    fit="cover" 
                    position="relative" 
                    borderRadius="full"
                    
                    m="auto"
                />
            </GridItem>

            <GridItem rowSpan={2} bg="tomato">
                <RecipeText />
            </GridItem>

            <GridItem>
                <Text fontSize="2rem" textAlign="center">Burger</Text>
            </GridItem>
            
        </Grid>
    )
}