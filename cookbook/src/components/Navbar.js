import React from 'react';
import { Flex, Spacer, Input } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <Flex flexDirection="row" bg="tomato">
            <p>9CookBook</p>
            <Spacer />
            <form>
                <label for="search">
                    <Input id="search" type="text" placeholder="Search" />
                </label>
            </form>
            <p>Home</p>
            <p>All Recipes</p>
            <p>Create Your Own</p>
        </Flex>
    )
}