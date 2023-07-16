'use strict';

import { getRecipesJSON } from "../get/getRecipesJSON.js";

import { displayAllRecipes } from "../display/displayAllRecipes.js";

export function getMultiTags(allTypesTagObjectsArr) {

    console.log("allTypesTagObjectsArr vaut:", allTypesTagObjectsArr);

    // Tableau de stockage des recettes filtrées par nom de tag et nom propriété
    // let filteredRecipeByTagNameAndPropertyNameArr = [];

    // Tableau de stockage des objects ingredients
    const ingredientsObjectsArr = [];
    // Tableau de stockage des objects appareils
    const appliancesObjectsArr = [];
    // Tableau de stockage des objects ustensiles
    const ustensilsObjectsArr = [];

    // Tableau de stockage des recettes filtrées pour les ingrédients
    let preFilteredRecipeForIngredientsArr = [];

    // Tableau de stockage des recettes UNIQUES filtrées pour les ingrédients
    let filteredRecipeForIngredientsArr = [];

    // Tableau de stockage des recettes filtrées pour les appareils
    let filteredRecipeForAppliancesArr = [];

    // Tableau de stockage des recettes filtrées pour les ustensiles
    let filteredRecipeForUstensilsArr = [];

    // Tableau d'intersection des tableaux ingredients et appliances
    let interIngAppArr = [];

    // Tableau d'intersection des tableaux interIngAndAppArr et ustensils
    let interIngAppAndUstArr = [];

    // Tableau d'intersection des tableaux ingredients et ustensils
    let interIngUstArr = [];

    // Tableau d'intersection des tableaux appliances et ustensils
    let interAppUstArr = [];

    // const allRecipesArr = getRecipesJSON();
    // console.log(allRecipesArr);

    allTypesTagObjectsArr.forEach((tagObject) => {
        switch (tagObject.type) {
            case "ingredient":
                ingredientsObjectsArr.push(tagObject.name);
                break;
            case "appliance":
                appliancesObjectsArr.push(tagObject.name);
                break;
            case "ustensil":
                ustensilsObjectsArr.push(tagObject.name);
                break;
            default:
                break;
        }
    });

    // if(ingredientsObjectsArr.length == 0) {

    //     // on vide la liste des recettes pour afficher les nouvelles filtrées
    //     const recipesList = document.querySelector(".recipes-list");
    //     recipesList.textContent = "";
    //     displayAllRecipes(allRecipesArr);
    // }

    let aumentedFilteredRecipeForIngredientsArr = [];

    if (ingredientsObjectsArr.length > 0) {
        console.log("ingredientsObjectsArr vaut:", ingredientsObjectsArr);
        ingredientsObjectsArr.forEach((tagObjectName) => {

            preFilteredRecipeForIngredientsArr = getRecipesJSON().filter(
            // filteredRecipeForIngredientsArr = getRecipesJSON().filter(
                recipeData =>
                    recipeData.ingredients.some(ing => ing.ingredient.toLowerCase().includes(tagObjectName)));
            ;
            console.log("preFilteredRecipeForIngredientsArr vaut:", preFilteredRecipeForIngredientsArr);

            // On ajoute la/les recipe/s au tableau augmenté
            preFilteredRecipeForIngredientsArr.forEach((recipe) => {
                aumentedFilteredRecipeForIngredientsArr.push(recipe);
            });
            console.log("aumentedFilteredRecipeForIngredientsArr vaut:", aumentedFilteredRecipeForIngredientsArr);

            // On enlève les recipes en doublon
            filteredRecipeForIngredientsArr = aumentedFilteredRecipeForIngredientsArr
                .filter((x, i) => aumentedFilteredRecipeForIngredientsArr.indexOf(x) === i);
            console.log("filteredRecipeForIngredientsArr vaut:", filteredRecipeForIngredientsArr);

            // on vide la liste des recettes pour afficher les nouvelles filtrées
            const recipesList = document.querySelector(".recipes-list");
            recipesList.textContent = "";

            // Affichage des recettes filtrées
            // displayAllRecipes(filteredRecipeForIngredientsArr);
            displayAllRecipes(filteredRecipeForIngredientsArr);
        });
    };

    if (appliancesObjectsArr.length > 0) {
        console.log("appliancesObjectsArr vaut:", appliancesObjectsArr);
        appliancesObjectsArr.forEach(tagObjectName => {
            // console.log("object.name vaut:", tagObjectName);

            // filteredRecipeByTagNameAndPropertyNameArr = getRecipesJSON().filter(
            filteredRecipeForAppliancesArr = getRecipesJSON().filter(
                recipeData =>
                    recipeData.appliance.toLowerCase().includes(tagObjectName));
            ;
            console.log("filteredRecipeForAppliancesArr vaut:", filteredRecipeForAppliancesArr);

            // Affichage des recettes filtrées
            displayAllRecipes(filteredRecipeForAppliancesArr);
        });
    };

    if (ustensilsObjectsArr.length > 0) {
        console.log("ustensilsObjectsArr vaut:", ustensilsObjectsArr);
        ustensilsObjectsArr.forEach(tagObjectName => {
            // console.log("object.name vaut:", tagObjectName);

            // filteredRecipeByTagNameAndPropertyNameArr = getRecipesJSON().filter(
            filteredRecipeForUstensilsArr = getRecipesJSON().filter(
                recipeData =>
                    recipeData.ustensils.some(el => el.toLowerCase().includes(tagObjectName)));
            ;
            console.log("filteredRecipeForUstensilsArr vaut:", filteredRecipeForUstensilsArr);
            // Affichage des recettes filtrées
            displayAllRecipes(filteredRecipeForUstensilsArr);
        });
    };

    // Intersection entre ingredients & appliances

    if (filteredRecipeForIngredientsArr.length > 0 && filteredRecipeForAppliancesArr.length > 0) {
        interIngAppArr = filteredRecipeForIngredientsArr.filter((value) => {

            return filteredRecipeForAppliancesArr.includes(value);
        });
        console.log("interIngAppArr vaut:", interIngAppArr);

        // on vide la liste des recettes pour afficher les nouvelles filtrées
        const recipesList = document.querySelector(".recipes-list");
        recipesList.textContent = "";

        if (interIngAppArr) {
            // On affiche le résultat de l'intersection ingredients/appliances
            displayAllRecipes(interIngAppArr);
        } else {
            recipesList.innerHTML = `
                <h2> Aucune recette ne correspond à votre critère... 
                Vous pouvez chercher « tarte aux pommes », « poisson », etc...</h2>
            `
        }
    };

    // Intersection entre ingredients/appliances et ustensils

    if (interIngAppArr.length > 0 && filteredRecipeForUstensilsArr.length > 0) {
        interIngAppAndUstArr = interIngAppArr.filter((value) => {

            return filteredRecipeForUstensilsArr.includes(value);
        });
        console.log("interIngAppAndUstArr vaut:", interIngAppAndUstArr);

        // on vide la liste des recettes pour afficher les nouvelles filtrées
        const recipesList = document.querySelector(".recipes-list");
        recipesList.textContent = "";

        if (interIngAppAndUstArr.length > 0) {
            // On affiche le résultat de l'intersection ingredients/appliances et ustensils
            displayAllRecipes(interIngAppAndUstArr);
        } else {
            recipesList.innerHTML = `
                <h2> Aucune recette ne correspond à votre critère... 
                Vous pouvez chercher « tarte aux pommes », « poisson », etc...</h2>
            `
        }
    };

    // Intersection entre ingredients et ustensils

    if (filteredRecipeForIngredientsArr.length > 0 && filteredRecipeForUstensilsArr.length > 0
        && appliancesObjectsArr.length == 0) {
        interIngUstArr = filteredRecipeForIngredientsArr.filter((value) => {

            return filteredRecipeForUstensilsArr.includes(value);
        });
        console.log("interIngUstArr vaut:", interIngUstArr);

        // on vide la liste des recettes pour afficher les nouvelles filtrées
        const recipesList = document.querySelector(".recipes-list");
        recipesList.textContent = "";

        if (interIngUstArr) {
            // On affiche le résultat de l'intersection ingredients/ustensils
            displayAllRecipes(interIngUstArr);
        } else {
            recipesList.innerHTML = `
                <h2> Aucune recette ne correspond à votre critère... 
                Vous pouvez chercher « tarte aux pommes », « poisson », etc...</h2>
            `
        }
    };

    // Intersection entre appliances et ustensils

    if (filteredRecipeForAppliancesArr.length > 0 && filteredRecipeForUstensilsArr.length > 0
        && ingredientsObjectsArr == 0) {
        interAppUstArr = filteredRecipeForAppliancesArr.filter((value) => {

            return filteredRecipeForUstensilsArr.includes(value);
        });
        console.log("interAppUstArr vaut:", interAppUstArr);

        // on vide la liste des recettes pour afficher les nouvelles filtrées
        const recipesList = document.querySelector(".recipes-list");
        recipesList.textContent = "";

        if (interAppUstArr) {
            // On affiche le résultat de l'intersection appliances et ustensils
            displayAllRecipes(interAppUstArr);
        } else {
            recipesList.innerHTML = `
                <h2> Aucune recette ne correspond à votre critère... 
                Vous pouvez chercher « tarte aux pommes », « poisson », etc...</h2>
            `
        }
    };

    // console.log("ingredientsObjectsArr vaut:", ingredientsObjectsArr);
    // console.log("appliancesObjectsArr vaut:", appliancesObjectsArr);
    // console.log("ustensilsObjectsArr vaut:", ustensilsObjectsArr);

    // return filteredRecipeByTagNameAndPropertyNameArr;
};