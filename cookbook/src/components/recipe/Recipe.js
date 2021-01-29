import React from 'react';
import burger from '../../assets/burger.jpeg'
import { Grid, GridItem, Image, Box } from '@chakra-ui/react';
import RecipeText from './RecipeText';

export default function Recipe() {
    return (
        <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="1fr 3fr"
            gap={2}
            bg="#037ef3"
            w="80%"
        >
            <GridItem bg="tomato">
                <Box 
                position="relative"
                borderRadius="full"
                overflow="hidden"
                boxSize="250px"
                borderColor="#ffd663"
                borderWidth="0.4rem"
                >
                <Image src={burger} boxSize="250px" fit="cover" position="relative" />
            </Box>
            </GridItem>

            <GridItem rowSpan={2} bg="tomato">
                <RecipeText />
            </GridItem>

            <GridItem bg="tomato">
                <p>Burger</p>
            </GridItem>
            
        </Grid>
    )
}