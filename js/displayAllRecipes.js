'use strict';

// Import de la méthode de création d'une recipe
import { createOneRecipe } from "./createOneRecipe.js";

// Création de la liste <ul> des recipes
export function displayAllRecipes(recipesJsonArr) {

    const recipesList = document.querySelector(".recipes-list");

    recipesJsonArr.forEach(recipe => {
        // console.log(recipe)
        // On peuple la <ul> avec toutes les recipes via crateOneRecipe()
        recipesList.appendChild(createOneRecipe(recipe));
    });
};