'use strict'; 

import { searchRecipeByPropertyName } from "../search/searchRecipeByPropertyName.js";

import { displayAllRecipes } from "../display/displayAllRecipes.js";

// Gestion d'un tag passé à l'input

export function handleInput(evt, propertyName, getRecipesJSON) {

    console.log("je suis dans l'input");
        console.log("propertyName vaut:", propertyName)
        console.log("searchedString vaut:", evt.target.value);

        const recipesList = document.querySelector(".recipes-list");
        recipesList.textContent = "";

        const searchedString = evt.target.value.toLowerCase();

        const filteredArr = searchRecipeByPropertyName(searchedString, propertyName, getRecipesJSON);

        console.log(filteredArr);
        displayAllRecipes(filteredArr);
};