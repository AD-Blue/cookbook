import React, { useState, useContext } from 'react'
import { Flex, Spacer, Input, Link, Box, Text, Textarea, FormControl, Button, FormLabel, FormHelperText } from "@chakra-ui/react";
import { GlobalContext } from '../Context/GlobalState';

export default function Create() {
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [steps, setSteps] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [img, setImg] = useState('');
    const [ingArr, setIngArr] = useState([]);
    const [stepsArr, setStepsArr] = useState([]);

    const { addRecipe } = useContext(GlobalContext);


    const onSubmit = e => {

        const newRecipe = {
            title,
            description,
            ingredients: ingArr,
            steps: stepsArr,
            img
        }

        addRecipe(newRecipe);
    }

    return (
        <form onSubmit={onSubmit}>
            <FormControl mb="1rem">
                <FormLabel>Title of your recipe</FormLabel>
                <Input isRequired="true" placeholder="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)} borderColor="#aaa" />
            </FormControl>
            <FormControl mb="1rem">
                <FormLabel>Your recipe's description</FormLabel>
                <Input isRequired="true" placeholder="Recipe Description" value={description} onChange={(e) => setDesc(e.target.value)} borderColor="#aaa" />
            </FormControl>
            <FormControl mb="1rem">
                <FormLabel>Image of your recipe</FormLabel>
                <Input isRequired="true" placeholder="Recipe Image URL" value={img} onChange={(e) => setImg(e.target.value)} borderColor="#aaa" />
                <FormHelperText>Copy and paste the link to an image of your food! (You can upload on sites like Imgur)</FormHelperText>
            </FormControl>
            <FormControl mb="2rem">
                <FormLabel>What ingredients are in your recipe?</FormLabel>
                <Textarea
                    placeholder="Recipe Ingredients"
                    isRequired="true"
                    value={ingredients} 
                    onChange={(e) => setIngredients(e.target.value)}
                    size="sm"
                    resize="none"
                    borderColor="#aaa"
                    h="300px"
                />
                <FormHelperText>Please use a new line for each new ingredient (hit enter after each one)</FormHelperText>
            </FormControl>
            <FormControl mb="2rem">
                <FormLabel>How do we make your recipe?</FormLabel>
                <Textarea
                    placeholder="Recipe Steps"
                    isRequired="true" 
                    value={steps} 
                    onChange={(e) => setSteps(e.target.value)}
                    size="sm"
                    resize="none"
                    borderColor="#aaa"
                    h="300px"
                />
                <FormHelperText>Please use a new line for each new step (hit enter after each one)</FormHelperText>
            </FormControl>
            
            <Button borderColor="#aaa" variant="outline" mb="3rem" type="submit" onClick={() => {
                setIngArr(ingredients.split(/\r?\n/));
                setStepsArr(steps.split(/\r?\n/));
            }}>
                Submit
            </Button>
        </form>
    )
}
