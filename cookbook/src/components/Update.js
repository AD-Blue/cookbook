import React, { useContext, useEffect, useState } from 'react'
import { Flex, Spacer, Input, Link, Box, Text, 
    Textarea, FormControl, Button, FormLabel, FormHelperText, 
    Editable, EditableInput, EditablePreview 
} from "@chakra-ui/react";
import { GlobalContext } from '../Context/GlobalState';
import { useParams } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

export default function Update() {
    const { recipe, getRecipe, updateRecipe } = useContext(GlobalContext);

    const { id } = useParams();

    useEffect(() => {
        getRecipe(id)
    }, [recipe.title, recipe.description])

    console.log("New update")

    let ingStr = "";
    console.log(recipe.ingredients)
    recipe.ingredients.forEach(ingredient => {
        ingStr += ingredient + '\n';
    })
    console.log(ingStr)
    const changeTitle = (value) => {
        const updatedRecipe = {
            title: value,
            _id: id
        }
        console.log('id ' + updatedRecipe._id)
        updateRecipe(updatedRecipe);
    }

    const changeDesc = (value) => {
        const updatedRecipe = {
            description: value,
            _id: id
        }
        console.log('id ' + updatedRecipe._id)
        updateRecipe(updatedRecipe);
    }

    const changeImg = (value) => {
        const updatedRecipe = {
            img: value,
            _id: id
        }
        console.log('id ' + updatedRecipe._id)
        updateRecipe(updatedRecipe);
    }
    const changeIngredients = (value) => {
        let ingredientArr = value.split(/\r?\n/);
        ingStr += "\n"
        const updatedRecipe = {
            ingredients: ingredientArr,
            _id: id
        }
        console.log('id ' + updatedRecipe._id)
        updateRecipe(updatedRecipe);
    }

    return (
        <Box>
            <Text>Click on the text you want to change and hit 'enter' to save the changes</Text>
            <Editable defaultValue={recipe.title} onSubmit={changeTitle} submitOnBlur={false}>
                <EditablePreview />
                <EditableInput />
            </Editable>
            <Editable defaultValue={recipe.description} onSubmit={changeDesc} submitOnBlur={false}>
                <EditablePreview />
                <EditableInput />
            </Editable>
            <Editable defaultValue={recipe.img} onSubmit={changeImg} submitOnBlur={false}>
                <EditablePreview />
                <EditableInput />
            </Editable>
        </Box>
    )
}
