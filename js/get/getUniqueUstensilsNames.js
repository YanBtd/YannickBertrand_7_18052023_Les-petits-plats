'use strict';

// import { getRecipesJSON } from "./getRecipesJSON.js";

export function getUniqueUstensilsNames(getRecipesJSON) {

    // Stockage de la propriété ustensils de toutes les recipes
    const allUstensilsPropertiesOfAllRecipesArr = [];

    // Stockage des 122 ustensils de toutes les recipes
    const allUstensilsOfAllRecipesArr = [];

    // Stockage des 25 ustensils uniques triés
    let allUniqueUstensilsOfAllRecipesArr = [];

    // On ajoute chacune des 50 propriétés ustensils au tableau des propriétés
    getRecipesJSON().forEach(recipe =>
        allUstensilsPropertiesOfAllRecipesArr.push(recipe.ustensils)
    )


    // Pour la propriété ustensils de chaque recipe
    for (const oneIteratedUstensilsProperty of allUstensilsPropertiesOfAllRecipesArr) {

        // Pour chaque ustensil de la propriété ustensils de chaque recipe
        for (const oneIteratedUstensil of oneIteratedUstensilsProperty) {

            // On ajoute l'ustensil insensible à la casse au tableau des ustensils
            allUstensilsOfAllRecipesArr.push(oneIteratedUstensil.toLowerCase());

            // Stockage des 121 ingredients uniques après filtrage et tri alphabétique ascendant
            allUniqueUstensilsOfAllRecipesArr = allUstensilsOfAllRecipesArr
                .filter((x, i) => allUstensilsOfAllRecipesArr.indexOf(x) === i);
            // .sort((a, b) => a.localeCompare(b, 'fr'));
        };
    };
    // On retourne le tableau des 25 ustensils uniques
    // console.log(allUstensilsOfAllRecipesArr)
    // console.log(allUniqueUstensilsOfAllRecipesArr)
    // console.log(allUniqueIngredientsOfAllRecipesArr)
    return allUniqueUstensilsOfAllRecipesArr;
};