'use strict';

import { getRecipesFromRecipesList } from "./getRecipesFromRecipesList.js";

export function getIngredientsListOfAllFilteredRecipes(propertyName, tagFactory, 
    createOneTag, displayOneTag, displayAllRecipes, getRecipesJSON, 
    searchRecipeByTagNameAndPropertyName) {

    // Récupération de la liste des recipes
    const filteredRecipesLiArr = getRecipesFromRecipesList();

    // Tableau de stockage de tous les noms d'ingrédients de toutes les recipes
    const allRecipesIngredientsTxtNamesArr = [];
    // const allRecipesTagsTxtNamesArr = [];

    // Tableau de stockage des noms d'ingrédients uniques de toutes les recipes
    let allUniqueRecipesIngredientsTxtNamesArr = [];
    // const allUniqueRecipesIngredientsTxtNamesArr = [];


    filteredRecipesLiArr.forEach((recipe) => {

        // On récupère le nom de la recipe
        const recipeNameTxt = recipe.querySelector(".recipe-name-wrapper").innerText;
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
            const ingredientNameTxt = ingredient.querySelector(".recipe-ingredient-span-ingredient").innerText;
            // console.log(ingredientNameTxt);
            // const ingredientNameTxt = tagName.innerHTML;

            // On l'ajoute au tableau de stockage de tous les ingrédients
            allRecipesIngredientsTxtNamesArr.push(ingredientNameTxt);
            // allRecipesTagsTxtNamesArr.push(ingredientNameTxt);

            // On enlève les noms d'ingrédients en doublons
            allUniqueRecipesIngredientsTxtNamesArr = allRecipesIngredientsTxtNamesArr.filter(
            // allUniqueRecipesIngredientsTxtNamesArr = allRecipesTagsTxtNamesArr.filter(
                (x, i) => allRecipesIngredientsTxtNamesArr.indexOf(x) === i);
                // (x, i) => allRecipesTagsTxtNamesArr.indexOf(x) === i);

        });

        console.log("allRecipesIngredientsTxtNamesArr vaut:", allRecipesIngredientsTxtNamesArr);
        console.log("allUniqueRecipesIngredientsTxtNamesArr vaut:", allUniqueRecipesIngredientsTxtNamesArr);
    });

    return allUniqueRecipesIngredientsTxtNamesArr;
};  