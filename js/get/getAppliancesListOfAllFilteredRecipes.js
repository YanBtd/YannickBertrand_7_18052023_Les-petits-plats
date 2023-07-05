'use strict';

import { getRecipesFromRecipesList } from "./getRecipesFromRecipesList.js";

// import { getRecipesJSON } from "./getRecipesJSON.js";

export function getAppliancesListOfAllFilteredRecipes(propertyName, tagFactory,
    createOneTag, displayOneTag, displayAllRecipes, getRecipesJSON,
    searchRecipeByTagNameAndPropertyName, json) {

    // Récupération de la liste des recipes
    const filteredRecipesLiArr = getRecipesFromRecipesList();
    console.log(filteredRecipesLiArr);

    // Tableau de stockage de tous les noms d'appareils de toutes les recipes
    const allRecipesAppliancesTxtNamesArr = [];
    // const allRecipesAppliancesTxtNamesArr = [];

    // Tableau de stockage des noms d'appareils uniques de toutes les recipes
    let allUniqueRecipesAppliancesTxtNamesArr = [];
    // const allUniqueRecipesAppliancesTxtNamesArr = [];

    const filteredRecipesNames = [];

    const allApplianceOfAllRecipesArr =[];

    const allRecipesJSONArr = json;
    console.log(allRecipesJSONArr);


    filteredRecipesLiArr.forEach((recipe) => {

        // On récupère le nom de la recipe
        const recipeNameTxt = recipe.querySelector(".recipe-name-wrapper").innerText;
        console.log("-------> recipeNameTxt vaut:", recipeNameTxt);

        // On le push dans le tableau de noms des recipes filtrées
        filteredRecipesNames.push(recipeNameTxt);
        console.log(filteredRecipesNames);

        // On accède au wrapper d'ingrédients de chaque recipe
        // const recipeIngredientsWrapperLiNodeList = recipe.querySelectorAll("li");
        // console.log("recipeIngredientsWrapperLiNodeList vaut:", recipeIngredientsWrapperLiNodeList);

        // allAppliancePropertiesOfAllRecipesArr.push(recipe.appliance.toLowerCase())

        // On récupère la recette dans le JSON grace à son nom
        // const recipeData = recipe.name.toLowerCase().includes(recipeNameTxt)
        
        // console.log(recipeData);

        // On récupère la recette


        // Variable de récupération de l'appareil de la recipe

        // On récupère l'appareil de la recipe

        // Tableau de stockage des li ingredients de chaque recipe
        // const recipeIngredientsLiArr = [];

        // On push chaque li ingredient dans le tableau de stockage
        // for (let i = 0; i < recipeIngredientsWrapperLiNodeList.length; i++) {
        //     recipeIngredientsLiArr.push(recipeIngredientsWrapperLiNodeList[i]);
        // }
        // console.log("recipeIngredientsLiArr vaut:", recipeIngredientsLiArr);

        // Pour chaque ingredient de chaque recipe
        // recipeIngredientsLiArr.forEach((ingredient) => {

            // On récupère son nom
            // const ingredientNameTxt = ingredient.querySelector(".recipe-ingredient-span-ingredient").innerText;
            // console.log(ingredientNameTxt);
            // const applianceNameTxt = ingredient.querySelector(".recipe-ingredient-span-ingredient").innerText;
            // console.log(ingredientNameTxt);


            // On l'ajoute au tableau de stockage de tous les appareils
            // allRecipesAppliancesTxtNamesArr.push(ingredientNameTxt);
            // allRecipesAppliancesTxtNamesArr.push(applianceNameTxt);
  

            // On enlève les noms d'ingrédients en doublons
            // allUniqueRecipesAppliancesTxtNamesArr = allRecipesAppliancesTxtNamesArr.filter(

                // (x, i) => allRecipesAppliancesTxtNamesArr.indexOf(x) === i);


        console.log("allRecipesAppliancesTxtNamesArr vaut:", allRecipesAppliancesTxtNamesArr);
        console.log("allUniqueRecipesAppliancesTxtNamesArr vaut:", allUniqueRecipesAppliancesTxtNamesArr);
    });

    return allUniqueRecipesAppliancesTxtNamesArr;
};  