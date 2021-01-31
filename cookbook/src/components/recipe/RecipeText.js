import React, { useContext, useEffect } from 'react';
import { Flex, Spacer, Input, Link, Box, Text, UnorderedList, OrderedList, ListItem } from "@chakra-ui/react";
import { GlobalContext } from '../../Context/GlobalState';

export default function RecipeText() {
    const { recipe, getRecipe } = useContext(GlobalContext);

    const id = '601602a912ee4f0dc81ef613'

    useEffect(() => {
        getRecipe(id)   //Placeholder until I get routing and stuff working lmao
    }, [id])

    return (
        <Flex direction="column" borderLeft="solid" pt="4rem" pb="4rem" ml="1rem">
            <Text fontSize="1.3rem" pl="3rem" color="rgb(100, 100, 100)">
                {recipe.description}
            </Text>
            
            <Flex direction="row" mt="6rem" justifyContent="space-around" pl="3rem">
                <Box>
                    <Text fontSize="1.5rem" fontWeight="600">Ingredients</Text>
                    <UnorderedList fontSize="1.1rem">
                        {recipe.ingredients.map((ingredient) => (
                            <ListItem>{ingredient}</ListItem>
                        ))}
                    </UnorderedList>
                </Box>
                
                <Box pl="6rem" w="80%">
                    <Text fontSize="1.5rem" fontWeight="600">Steps</Text>
                    <OrderedList fontSize="1.1rem">
                        {recipe.steps.map((step) => (
                            <ListItem>{step}</ListItem>
                        ))}
                    </OrderedList>
                </Box>
                
            </Flex>
        </Flex>
    )
}
