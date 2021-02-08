import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, GridItem, Image, Text, Link } from '@chakra-ui/react';

export default function RecipeCard({ recipe }) {
    return (
        <Link as={RouterLink} to={"/" + recipe._id}>
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="1fr 4fr"
                p={[
                    "1rem",
                    "3rem"
                ]}
                gap={2}
                borderRadius="7px"
                borderWidth="3px"
                borderColor="#444"
                mb="2rem"
                w={[
                    "90%",
                    "100%"
                ]}
                ml="auto"
                mr="auto"
            >
                <GridItem rowSpan={[1, 2]} colSpan={1}>
                    <Image 
                        borderRadius="7px" 
                        boxSize={[
                            "100px",
                            "100px",
                            "150px",
                            "200px"
                        ]} 
                        src={recipe.img} 
                        fit="cover" />
                </GridItem>
                <GridItem 
                    pt={[
                        "1rem",
                        "2rem"
                    ]}
                >
                    <Text 
                        pl="2rem" 
                        fontSize={[
                            "22px",
                            "46px"
                        ]} 
                        fontFamily="Georgia, serif"
                    >
                        {recipe.title}
                    </Text>
                    
                </GridItem>
                <GridItem pt="1rem" colSpan={[2, 1]}>
                    <Text 
                        pl="2rem" 
                        fontSize={[
                            "16px",
                            "26px"
                        ]} 
                        fontFamily="Georgia, 
                        serif"
                    >
                        {recipe.description}
                    </Text>
                </GridItem>
            </Grid>
        </Link>
        
    )
}
