import React, { useContext, useEffect, useState } from 'react';
import burger from '../../assets/burger.jpeg'
import { Grid, GridItem, Image, Box, Text, Flex, UnorderedList, OrderedList, ListItem } from '@chakra-ui/react';
import { GlobalContext } from '../../Context/GlobalState';
import { useParams } from 'react-router-dom';

export default function Recipe() {
    const { recipe, getRecipe } = useContext(GlobalContext);

    const { id } = useParams();

    useEffect(() => {
        getRecipe(id)   //Placeholder until I get routing and stuff working lmao
    }, [id])

    console.log("recipe " + JSON.stringify(recipe));

    return (
        <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="1fr 3fr"
            gap={2}
            w="80%"
            fontFamily="Georgia, serif"
        >
            <GridItem pt="2.5rem">
                <Image 
                    src={recipe.img} 
                    boxSize="275px" 
                    fit="cover" 
                    position="relative" 
                    borderRadius="full"
                    
                    m="auto"
                />
            </GridItem>

            <GridItem rowSpan={2}>
                <Flex direction="column" borderLeft="solid" pt="4rem" pb="4rem" ml="1rem">
                    <Text fontSize="1.3rem" pl="3rem" color="rgb(120, 120, 120)">
                        {recipe.description}
                    </Text>
                    
                    <Flex direction="row" mt="6rem" justifyContent="space-around" pl="3rem">
                        <Box>
                            <Text fontSize="1.5rem" fontWeight="600">Ingredients</Text>
                            <UnorderedList fontSize="1.1rem">
                                {recipe.ingredients && recipe.ingredients.map((ingredient) => (
                                    <ListItem>{ingredient}</ListItem>
                                ))}
                            </UnorderedList>
                        </Box>
                        
                        <Box pl="6rem" w="80%">
                            <Text fontSize="1.5rem" fontWeight="600">Steps</Text>
                            <OrderedList fontSize="1.1rem">
                                {recipe.steps && recipe.steps.map((step) => (
                                    <ListItem>{step}</ListItem>
                                ))}
                            </OrderedList>
                        </Box>
                        
                    </Flex>
                </Flex>
            </GridItem>

            <GridItem>
                <Text fontSize="2.2rem" textAlign="center" lineHeight="1.3em">{recipe.title}</Text>
            </GridItem>
            
        </Grid>
    )
}