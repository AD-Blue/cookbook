import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Flex, Spacer, Image, Text, Link, Menu, Box,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
    IconButton
    } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'

export default function RecipeCard({ recipe }) {
    return (
            <Flex
                borderRadius="7px"
                borderWidth="3px"
                borderColor="#444"
                mb="2rem"
                p="0 0 3rem 3rem"
            >
                <Image 
                    borderRadius="7px" 
                    boxSize={[
                        "100px",
                        "100px",
                        "150px",
                        "200px"
                    ]} 
                    src={recipe.img} 
                    fit="cover" 
                    mt="3rem"
                />
                <Flex flexDirection="column" grow="2" pl="2rem">
                    <Flex mb="4rem" right="0">
                        <Spacer />
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label="Options"
                                icon={<HamburgerIcon />}
                                size="xs"
                                variant="outline"
                                border="none"
                            />
                            <MenuList>
                                <MenuItem>Edit</MenuItem>
                                <MenuItem>Delete</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                    
                    <Link as={RouterLink} to={"/" + recipe._id}>
                    <Text 
                        pl="2rem"
                        pr="3rem" 
                        fontSize={[
                            "22px",
                            "46px"
                        ]} 
                        fontFamily="Georgia, serif"
                    >
                        {recipe.title}
                    </Text>
                    <Text 
                        pl="2rem"
                        pr="3rem" 
                        fontSize={[
                            "16px",
                            "26px"
                        ]} 
                        fontFamily="Georgia, 
                        serif"
                    >
                        {recipe.description}
                    </Text>
                    </Link>
                </Flex>
            </Flex>
    )
}
