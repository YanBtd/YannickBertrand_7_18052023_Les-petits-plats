'use strict';

import { displayAllRecipes } from "./displayAllRecipes.js";

// Pas besoin car envoyé par index.js
// import { getRecipesJSON } from "./getRecipesJSON.js";

export function searchForAllParameters(getRecipesJSON) {

    const searchInput = document.querySelector("#search-input");
    
    searchInput.addEventListener("input", filterData);

    function filterData(e) {

        const recipesList = document.querySelector(".recipes-list");
        recipesList.textContent = "";

        const searchedString = e.target.value.toLowerCase();

        // console.log(searchedString.length)

        // const filteredArr = getRecipesJSON().filter(recipeData => recipeData.ingredients.some(
        //     el => el.ingredient.toLowerCase().includes(searchedString)));

        const filteredArr = getRecipesJSON().filter(
            recipeData => recipeData.name.toLowerCase().includes(searchedString)
            || recipeData.description.toLowerCase().includes(searchedString)
            || recipeData.ingredients.some(el => el.ingredient.toLowerCase().includes(searchedString))
            || recipeData.appliance.toLowerCase().includes(searchedString)
            || recipeData.ustensils.some(el => el.toLowerCase().includes(searchedString)))
        ;
        displayAllRecipes(filteredArr);
    } 
};