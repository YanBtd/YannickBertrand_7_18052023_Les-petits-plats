'use strict';

import { getRecipesFromRecipesList } from "./getRecipesFromRecipesList.js";

export function getAppliancesListOfAllFilteredRecipes(getRecipesJSON) {

    // Récupération de la liste des recipes filtrées
    const filteredRecipesLiArr = getRecipesFromRecipesList();
    // console.log("filteredRecipesLiArr vaut :", filteredRecipesLiArr);

    // Tableau de stockage de tous les noms d'appareils de toutes les recipes
    const allRecipesAppliancesTxtNamesArr = [];
    // console.log("allRecipesAppliancesTxtNamesArr vaut:", allRecipesAppliancesTxtNamesArr);

    // Tableau de stockage des noms d'appareils uniques de toutes les recipes
    let allUniqueRecipesAppliancesTxtNamesArr = [];
    // console.log("allUniqueRecipesAppliancesTxtNamesArr vaut:", allUniqueRecipesAppliancesTxtNamesArr);


    filteredRecipesLiArr.forEach((recipe) => {

        // On récupère le nom de la recipe filtrée
        const recipeNameTxt = recipe.querySelector(".recipe-name-wrapper").innerText.toLowerCase();
        console.log("-------> recipeNameTxt vaut:", recipeNameTxt);

        // On récupère la recipe selon son nom
        const recipeObject = getRecipesJSON().filter(
            recipeData =>
                recipeData.name.toLowerCase().includes(recipeNameTxt))
            ;
        // console.log("recipeObject vaut:", recipeObject);

        // Pour chaque recipeObject, 
        recipeObject.forEach((recipe) => {

            // On récupère son appliance
            const recipeObjectAppliance = recipe.appliance.toLowerCase()
            // console.log(recipeObjectAppliance);

            // On stock son appliance dans le tableau de tous les appliances
            allRecipesAppliancesTxtNamesArr.push(recipeObjectAppliance);
            // console.log("allRecipesAppliancesTxtNamesArr", allRecipesAppliancesTxtNamesArr);

            // On enlève les noms d'appareils en doublons
            allUniqueRecipesAppliancesTxtNamesArr = allRecipesAppliancesTxtNamesArr.filter(
                (x, i) => allRecipesAppliancesTxtNamesArr.indexOf(x) === i).sort();
        });
        console.log("allRecipesAppliancesTxtNamesArr", allRecipesAppliancesTxtNamesArr);
        console.log("allUniqueRecipesAppliancesTxtNamesArr", allUniqueRecipesAppliancesTxtNamesArr);
    });
    return allUniqueRecipesAppliancesTxtNamesArr;
};  