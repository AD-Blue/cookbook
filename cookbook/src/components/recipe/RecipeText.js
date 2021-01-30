import React from 'react';
import { Flex, Spacer, Input, Link, Box, Text, UnorderedList, OrderedList, ListItem } from "@chakra-ui/react";

export default function RecipeText() {
    return (
        <Flex direction="column" borderLeft="solid" pt="2rem" pb="2rem">
            <Text fontSize="1.5rem" pl="3rem">
                Good burger made from ground beef. Tastes good. Very good indeed.
            </Text>
            
            <Flex direction="row" mt="7rem" justifyContent="space-around" pl="3rem">
                <UnorderedList fontSize="1.1rem">
                    <ListItem>Ground beef</ListItem>
                    <ListItem>Buns</ListItem>
                    <ListItem>Cheese</ListItem>
                    <ListItem>Lettuce</ListItem>
                    <ListItem>Tomato</ListItem>
                    <ListItem>Onions</ListItem>
                    <ListItem>Garlic</ListItem>
                </UnorderedList>
                <OrderedList fontSize="1.3rem" ml="3rem">
                    <ListItem>Dice onions and garlic. Put into bowl with ground beef</ListItem>
                    <ListItem>Mix contents of bowl then form patties</ListItem>
                    <ListItem>Put oil of your choice into pan and, once heated, place patties onto pan</ListItem>
                    <ListItem>Cook first side til cooked throughout. Flip</ListItem>
                    <ListItem>Place slice of cheese on patty in the last few seconds of cooking before removing patty from the pan</ListItem>
                    <ListItem>Place patty on bottom bun. Top with tomato and lettuce and top bun. Enjoy</ListItem>
                </OrderedList>
            </Flex>
        </Flex>
    )
}
