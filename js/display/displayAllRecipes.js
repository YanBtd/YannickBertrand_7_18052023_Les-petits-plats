'use strict';

// Import de la méthode de création d'une recette
import { createOneRecipe } from "../create/createOneRecipe.js";

// Création de la liste <ul> des recettes
export function displayAllRecipes(recipesJsonArr) {

    const recipesList = document.querySelector(".recipes-list");

    recipesJsonArr.forEach(objectRecipe => {
        // On peuple la <ul> avec toutes les recettes via crateOneRecipe()
        recipesList.appendChild(createOneRecipe(objectRecipe));
    });
};