import React, { useContext, useEffect, useState } from 'react'
import { Box, Text, Heading, FormControl, FormLabel, Input, FormHelperText, Textarea, Button } from "@chakra-ui/react";
import { GlobalContext } from '../Context/GlobalState';
import { useParams } from 'react-router-dom';

export default function Update() {
    const { recipe, getRecipe, updateRecipe } = useContext(GlobalContext);
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [steps, setSteps] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [img, setImg] = useState('');
    const [ingArr, setIngArr] = useState([]);
    const [stepsArr, setStepsArr] = useState([]);

    const onSubmit = () => {
        const newRecipe = {
            title,
            description,
            ingredients: ingArr,
            steps: stepsArr,
            img,
            "_id": id
        }

        updateRecipe(newRecipe);
    }

    const setStates = () => {
        setTitle(recipe.title);
        setDesc(recipe.description);
        setImg(recipe.img);
        setIngredients(recipe.ingredients.join('\n'))
        setSteps(recipe.steps.join('\n'))
    }
    
    const onClick = () => {
        setStates();
    }


    useEffect(() => {
        getRecipe(id);

        console.log(recipe)
        console.log('rendered')

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <Box>
            <Heading sa='h1' size='xl' mb='30px'>
                Editing recipe: {recipe.title}
            </Heading>

            <Button onClick={onClick}>Click to load existing values</Button>

            <form onSubmit={onSubmit}>
            <FormControl m="auto" mb="1rem" w={["95%", "100%"]}>
                <FormLabel>Title of your recipe</FormLabel>
                <Input isRequired="true" placeholder="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)} borderColor="#aaa" />
            </FormControl>
            <FormControl m="auto" mb="1rem" w={["95%", "100%"]}>
                <FormLabel>Your recipe's description</FormLabel>
                <Input isRequired="true" placeholder="Recipe Description" value={description} onChange={(e) => setDesc(e.target.value)} borderColor="#aaa" />
            </FormControl>
            <FormControl m="auto" mb="1rem" w={["95%", "100%"]}>
                <FormLabel>Image of your recipe</FormLabel>
                <Input isRequired="true" placeholder="Recipe Image URL" value={img} onChange={(e) => setImg(e.target.value)} borderColor="#aaa" />
                <FormHelperText>Copy and paste the link to an image of your food! (You can upload on sites like Imgur)</FormHelperText>
            </FormControl>
            <FormControl m="auto" mb="2rem" w={["95%", "100%"]}>
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
            <FormControl m="auto" mb="2rem" w={["95%", "100%"]}>
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
            
            <Button ml={["0.6rem", ""]} borderColor="#aaa" variant="outline" mb="3rem" type="submit" onClick={() => {
                setIngArr(ingredients.split(/\r?\n/));
                setStepsArr(steps.split(/\r?\n/));
            }}>
                Submit
            </Button>
        </form>
        </Box>
    )
}
