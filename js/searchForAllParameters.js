'use strict';

import { displayAllRecipes } from "./displayAllRecipes.js";

// Pas besoin car envoyé par index.js
// import { getRecipesJSON } from "./getRecipesJSON.js";

export function searchForAllParameters(getRecipesJSON) {

    const searchInput = document.querySelector("#search-input");
    
    searchInput.addEventListener("input", filterData);

    // searchInput.addEventListener("blur", (event) => {
    //     event.target.value = "";
    // });

    function filterData(e) {
        // On lance la recherche à partir de 3 caractères tapés dans la barre de recherches
        if(e.target.value.length > 2) {
            const recipesList = document.querySelector(".recipes-list");
            recipesList.textContent = "";

            const searchedString = e.target.value.toLowerCase();

            const filteredArr = getRecipesJSON().filter(
                recipeData => recipeData.name.toLowerCase().includes(searchedString)
                || recipeData.description.toLowerCase().includes(searchedString)
                || recipeData.ingredients.some(el => el.ingredient.toLowerCase().includes(searchedString))
                || recipeData.appliance.toLowerCase().includes(searchedString)
                || recipeData.ustensils.some(el => el.toLowerCase().includes(searchedString)))
            ;
            displayAllRecipes(filteredArr);
        }
        // Si la barre de recherche est vidée, on réaffiche l'ensemble des recettes
        if(e.target.value.length == 0) {
            displayAllRecipes(getRecipesJSON());
        }
    }
};