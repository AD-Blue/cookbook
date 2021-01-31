import React from 'react';
import { Flex, Spacer, Input, Link, Box, Text } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <Flex 
            flexDirection="row" 
            pb="1rem" 
            pt="1rem" 
            alignItems="center" 
            fontSize="1.2rem" 
            fontFamily="Georgia, serif" 
            borderBottom="solid" 
            ml="1rem" 
            mr="1rem" 
            borderBottomWidth="2px" 
            mb="5rem"
        >
            <Text color="#777" ml="2rem">9CookBook</Text>
            <Spacer />
            <form>
                <label for="search">
                    { /*<Input id="search" type="text" placeholder="Search" borderColor="#aaa" size="sm" focusBorderColor="#444" _hover={{ borderColor: "#333"}} borderRadius="4px" />*/ }
                </label>
            </form>
            <Flex color="#b8a039">
                <Link as={RouterLink} to="/" ml='2rem'>All Recipes</Link>
                <Link as={RouterLink} to="/create" ml='2rem' mr="2rem">Create Your Own</Link>
            </Flex>
            
        </Flex>
    )
}