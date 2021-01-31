import React, { useContext, useEffect, useState } from 'react';
import { Grid, GridItem, Image, Box, Text, Flex, UnorderedList, OrderedList, ListItem, useMediaQuery } from '@chakra-ui/react';
import { GlobalContext } from '../../Context/GlobalState';
import { useParams } from 'react-router-dom';

export default function Recipe() {
    const { recipe, getRecipe } = useContext(GlobalContext);
    const [isMobile] = useMediaQuery("(max-width: 400px")

    const { id } = useParams();

    useEffect(() => {
        getRecipe(id)
    }, [id])

    console.log("recipe " + JSON.stringify(recipe));

    let content = null;
    let mainTitle = null;

    if(isMobile) {
        content = <Text textAlign="center" fontSize="32px">{recipe.title}</Text>
    }
    else {
        mainTitle = 
        <Text 
            fontSize="2.2rem" 
            textAlign="center" 
            lineHeight="1.3em"
        >
            {recipe.title}
        </Text>
    }

    return (
        <Grid
            templateRows={[
                "1fr 3fr",
                "repeat(2, 1fr)"
            ]}
            templateColumns={[
                "1fr",
                "1fr 3fr"
            ]}
            gap={2}
            w="80%"
            fontFamily="Georgia, serif"
        >
            <GridItem pt={["", "2.5rem"]}>
                <Image 
                    src={recipe.img} 
                    boxSize="275px" 
                    fit="cover" 
                    position="relative" 
                    borderRadius="full"
                    m="auto"
                    mb={["22px", ""]}
                />
                {content}
            </GridItem>

            <GridItem rowSpan={[1, 2]}>
                <Flex 
                    direction="column" 
                    borderTop={[
                        "solid",
                        "none"
                    ]}
                    borderLeft={[
                        "",
                        "solid" 
                    ]}
                    pt={[
                        "1rem",
                        "4rem"
                    ]} 
                    pb={[
                        "1rem",
                        "4rem"
                    ]} 
                    ml={[
                        "0",
                        "1rem"
                    ]}
                >
                    <Text 
                        fontSize="1.3rem" 
                        pl={[
                            "1rem",
                            "3rem"
                        ]} 
                        color="rgb(120, 120, 120)"
                    >
                        {recipe.description}
                    </Text>
                    
                    <Flex 
                        direction={[
                            "column",
                            "row"
                        ]} 
                        mt={[
                            "4rem",
                            "6rem"]} 
                        justifyContent="space-around" 
                        alignItems={[
                            "center",
                            ""
                        ]}
                        pl={[
                            "",
                            "3rem"]}
                    >
                        <Box mb={["4rem", ""]} w={["95%", "20%"]}>
                            <Text 
                                fontSize="1.5rem" 
                                fontWeight="600"
                            >
                                Ingredients
                            </Text>
                            <UnorderedList 
                                fontSize="1.1rem"
                            >
                                {recipe.ingredients && recipe.ingredients.map((ingredient) => (
                                    <ListItem>{ingredient}</ListItem>
                                ))}
                            </UnorderedList>
                        </Box>
                        
                        <Box 
                            pl={[
                                "0",
                                "6rem"
                            ]} 
                            w={[
                                "95%",
                                "80%"
                            ]}
                        >
                            <Text 
                                fontSize="1.5rem" 
                                fontWeight="600"
                            >
                                Steps
                            </Text>
                            <OrderedList 
                                fontSize="1.1rem"
                            >
                                {recipe.steps && recipe.steps.map((step) => (
                                    <ListItem
                                        mb={[
                                            "22px",
                                            ""
                                        ]}
                                    >{step}</ListItem>
                                ))}
                            </OrderedList>
                        </Box>
                        
                    </Flex>
                </Flex>
            </GridItem>

            <GridItem>
                {mainTitle}
            </GridItem>
            
        </Grid>
    )
}