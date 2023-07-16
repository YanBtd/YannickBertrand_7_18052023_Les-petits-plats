'use strict';

import { getRecipesFromRecipesList } from "./getRecipesFromRecipesList.js";

export function getUstensilsListOfAllFilteredRecipes(getRecipesJSON) {

    // Récupération de la liste des recipes filtrées
    const filteredRecipesLiArr = getRecipesFromRecipesList();
    // console.log("filteredRecipesLiArr vaut :", filteredRecipesLiArr);

    // Tableau de stockage de tous les noms d'ustensiles de toutes les recipes
    const allRecipesUstensilsTxtNamesArr = [];
    // console.log("allRecipesUstensilsTxtNamesArr vaut:", allRecipesUstensilsTxtNamesArr);

    // Tableau de stockage des noms d'ustensiles uniques de toutes les recipes
    let allUniqueRecipesUstensilsTxtNamesArr = [];
    // console.log("allUniqueRecipesUstensilsTxtNamesArr vaut:", allUniqueRecipesUstensilsTxtNamesArr);


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

            // Tableau de stockage des ustensiles de chaque recipe
            let recipeUstensilsArr = [];

            // On récupère ses ustensiles
            recipeUstensilsArr = recipe.ustensils;
            // console.log("recipeUstensilsArr vaut:", recipeUstensilsArr);

            // Pour chaque ustensile du tableau des ustensiles
            recipeUstensilsArr.forEach((ustensile) => {

                // On le récupère 
                const recipeObjectUstensil = ustensile.toLowerCase();
                // console.log(recipeObjectUstensil);

                // On le stocke dans le tableau de tous les ustensiles
                allRecipesUstensilsTxtNamesArr.push(recipeObjectUstensil);
                // console.log("allRecipesUstensilsTxtNamesArr", allRecipesUstensilsTxtNamesArr);

                // On enlève les noms d'ustensiles en doublons
                allUniqueRecipesUstensilsTxtNamesArr = allRecipesUstensilsTxtNamesArr.filter(
                    (x, i) => allRecipesUstensilsTxtNamesArr.indexOf(x) === i).sort();
            });
        });
        console.log("allRecipesUstensilsTxtNamesArr", allRecipesUstensilsTxtNamesArr);
        console.log("allUniqueRecipesUstensilsTxtNamesArr", allUniqueRecipesUstensilsTxtNamesArr);
    });
    return allUniqueRecipesUstensilsTxtNamesArr;
};  