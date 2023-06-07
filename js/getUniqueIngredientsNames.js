'use strict';

import { getRecipesJSON } from "./getRecipesJSON.js";

export function getUniqueIngredientsNames() {

    // Stockage des propriétés ingredients de toutes les recipes
    const allIngredientsPropertiesOfAllRecipesArr = [];

    // Stockage de la propriété ingredient pour tous les ingredients de toutes les recipes
    const allIngredientsOfAllRecipesArr = [];

    // Stockage des ingrédients uniques triés
    let allUniqueIngredientsOfAllRecipesArr = [];

    getRecipesJSON().forEach(recipe =>
        allIngredientsPropertiesOfAllRecipesArr.push(recipe.ingredients)
    )

    // Pour la propriété ingredients de chaque recipe
    for (const oneIteratedIngredientsProperty of allIngredientsPropertiesOfAllRecipesArr) {

        // Pour chaque ingredient de la propriété ingredients de chaque recipe
        for (const oneIteratedObjectIngredient of oneIteratedIngredientsProperty) {

            // On ajoute sa propriété ingredient insensible à la casse au tableau des 254 ingrédients
            allIngredientsOfAllRecipesArr.push(oneIteratedObjectIngredient.ingredient.toLowerCase());

            // Stockage des 121 ingredients uniques après filtrage et tri alphabétique ascendant
            allUniqueIngredientsOfAllRecipesArr = allIngredientsOfAllRecipesArr
                .filter((x, i) => allIngredientsOfAllRecipesArr.indexOf(x) === i);
                // .sort((a, b) => a.localeCompare(b, 'fr'));
        };
    };
    return allUniqueIngredientsOfAllRecipesArr;
};