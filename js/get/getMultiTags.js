'use strict';

import { getRecipesJSON } from "../get/getRecipesJSON.js";

import { displayAllRecipes } from "../display/displayAllRecipes.js";

export function getMultiTags(allTypesTagObjectsArr) {

    // console.log("allTypesTagObjectsArr vaut:", allTypesTagObjectsArr);

    // Tableau de stockage des recettes filtrées par nom de tag et nom propriété
    let filteredRecipeByTagNameAndPropertyNameArr = [];

    // Tableau de stockage des objects ingredients
    const ingredientsObjectsArr = [];
    // Tableau de stockage des objects appareils
    const appliancesObjectsArr = [];
    // Tableau de stockage des objects ustensiles
    const ustensilsObjectsArr = [];

    allTypesTagObjectsArr.forEach((tag) => {
        switch (tag.type) {
            case "ingredient":
                ingredientsObjectsArr.push(tag.name);
                break;
            case "appliance":
                appliancesObjectsArr.push(tag.name);
                break;
            case "ustensil":
                ustensilsObjectsArr.push(tag.name);
                break;
            default:
                break;
        }
    });

    if (ingredientsObjectsArr.length > 0) {
        ingredientsObjectsArr.forEach(objName => {
            // console.log("object.name vaut:", objName);

            filteredRecipeByTagNameAndPropertyNameArr = getRecipesJSON().filter(
                recipeData =>
                    recipeData.ingredients.some(el => el.ingredient.toLowerCase().includes(objName)));
            ;
            console.log(filteredRecipeByTagNameAndPropertyNameArr);
            // Affichage des recettes filtrées
            displayAllRecipes(filteredRecipeByTagNameAndPropertyNameArr);
        });
    };

    if (appliancesObjectsArr.length > 0) {
        appliancesObjectsArr.forEach(objName => {
            // console.log("object.name vaut:", objName);

            filteredRecipeByTagNameAndPropertyNameArr = getRecipesJSON().filter(
                recipeData =>
                    recipeData.appliance.toLowerCase().includes(objName));
            ;
            console.log(filteredRecipeByTagNameAndPropertyNameArr);
            // Affichage des recettes filtrées
            displayAllRecipes(filteredRecipeByTagNameAndPropertyNameArr);
        });
    };

    if (ustensilsObjectsArr.length > 0) {
        ustensilsObjectsArr.forEach(objName => {
            // console.log("object.name vaut:", objName);

            filteredRecipeByTagNameAndPropertyNameArr = getRecipesJSON().filter(
                recipeData =>
                    recipeData.ustensils.some(el => el.toLowerCase().includes(objName)));
            ;
            console.log(filteredRecipeByTagNameAndPropertyNameArr);
            // Affichage des recettes filtrées
            displayAllRecipes(filteredRecipeByTagNameAndPropertyNameArr);
        });
    };
    
    console.log("ingredientsObjectsArr vaut:", ingredientsObjectsArr);
    console.log("appliancesObjectsArr vaut:", appliancesObjectsArr);
    console.log("ustensilsObjectsArr vaut:", ustensilsObjectsArr);

    // return filteredRecipeByTagNameAndPropertyNameArr;

};