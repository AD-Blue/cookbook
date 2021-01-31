import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Flex, Spacer, Input, Link, Box, Text } from "@chakra-ui/react";

export default function Home() {
    return (
        <Box>
            <Link as={RouterLink} to="/601602a912ee4f0dc81ef613">
                Temp Link to Recipe
            </Link>
        </Box>
    )
}
