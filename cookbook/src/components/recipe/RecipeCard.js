import React from 'react';
import { Grid, GridItem, Image, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function RecipeCard({ recipe }) {
    return (
        <Link as={RouterLink} to={"/" + recipe._id}>
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="1fr 4fr"
                p="3rem"
                gap={2}
                borderRadius="7px"
                borderWidth="3px"
                borderColor="#444"
                mb="2rem"
            >
                <GridItem rowSpan={2}>
                    <Image borderRadius="7px" boxSize="200px" src={recipe.img} fit="cover" />
                </GridItem>
                <GridItem pt="2rem">
                    <Text pl="2rem" fontSize="46px" fontFamily="Georgia, serif">{recipe.title}</Text>
                </GridItem>
                <GridItem pt="1rem">
                    <Text pl="2rem" fontSize="26px" fontFamily="Georgia, serif">{recipe.description}</Text>
                </GridItem>
            </Grid>
        </Link>
        
    )
}
