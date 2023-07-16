'use strict';

import { getRecipesFromRecipesList } from "./getRecipesFromRecipesList.js";

export function getIngredientsListOfAllFilteredRecipes() {

    // Récupération de la liste des recipes filtrées
    const filteredRecipesLiArr = getRecipesFromRecipesList();
    // console.log("filteredRecipesLiArr vaut:", filteredRecipesLiArr);

    // Tableau de stockage de tous les noms d'ingrédients de toutes les recipes
    const allRecipesIngredientsTxtNamesArr = [];
    // console.log("allRecipesIngredientsTxtNamesArr vaut:", allRecipesIngredientsTxtNamesArr);

    // Tableau de stockage des noms d'ingrédients uniques de toutes les recipes
    let allUniqueRecipesIngredientsTxtNamesArr = [];
    // console.log("allUniqueRecipesIngredientsTxtNamesArr vaut:", allUniqueRecipesIngredientsTxtNamesArr);


    filteredRecipesLiArr.forEach((recipe) => {

        // On récupère le nom de la recipe filtrée
        const recipeNameTxt = recipe.querySelector(".recipe-name-wrapper").innerText.toLowerCase();
        console.log("-------> recipeNameTxt vaut:", recipeNameTxt);

        // On accède au wrapper d'ingrédients de chaque recipe
        const recipeIngredientsWrapperLiNodeList = recipe.querySelectorAll("li");
        // console.log("recipeIngredientsWrapperLiNodeList vaut:", recipeIngredientsWrapperLiNodeList);

        // Tableau de stockage des li ingredients de chaque recipe
        const recipeIngredientsLiArr = [];

        // On push chaque li ingredient dans le tableau de stockage
        for (let i = 0; i < recipeIngredientsWrapperLiNodeList.length; i++) {
            recipeIngredientsLiArr.push(recipeIngredientsWrapperLiNodeList[i]);
        }
        // console.log("recipeIngredientsLiArr vaut:", recipeIngredientsLiArr);

        // Pour chaque ingredient de chaque recipe
        recipeIngredientsLiArr.forEach((ingredient) => {

            // On récupère son nom
            const ingredientNameTxt = ingredient.querySelector(".recipe-ingredient-span-ingredient").innerText.toLowerCase();
            // console.log("ingredientNameTxt vaut:", ingredientNameTxt);

            // On l'ajoute au tableau de stockage de tous les ingrédients
            allRecipesIngredientsTxtNamesArr.push(ingredientNameTxt);
            // console.log("allRecipesIngredientsTxtNamesArr vaut:", allRecipesIngredientsTxtNamesArr);

            // On enlève les noms d'ingrédients en doublons
            allUniqueRecipesIngredientsTxtNamesArr = allRecipesIngredientsTxtNamesArr.filter(
                (x, i) => allRecipesIngredientsTxtNamesArr.indexOf(x) === i).sort();
        });

        console.log("allRecipesIngredientsTxtNamesArr vaut:", allRecipesIngredientsTxtNamesArr);
        console.log("allUniqueRecipesIngredientsTxtNamesArr vaut:", allUniqueRecipesIngredientsTxtNamesArr);
    });
    return allUniqueRecipesIngredientsTxtNamesArr;
};  