'use strict';

export function getUniqueIngredientsNames(getRecipesJSON) {

    // Stockage de la propriété ingredients de toutes les recipes
    const allIngredientsPropertiesOfAllRecipesArr = [];

    // Stockage de la propriété ingredient pour les 254 ingredients de toutes les recipes
    const allIngredientsOfAllRecipesArr = [];

    // Stockage des ingrédients uniques triés
    let allUniqueIngredientsOfAllRecipesArr = [];

    // On ajoute chacune des 50 propriétés ingredients au tableau des propriétés
    getRecipesJSON().forEach(recipe =>
        allIngredientsPropertiesOfAllRecipesArr.push(recipe.ingredients)
    );

    // Pour la propriété ingredients de chaque recipe
    for (const oneIteratedIngredientsProperty of allIngredientsPropertiesOfAllRecipesArr) {

        // Pour chaque ingredient de la propriété ingredients de chaque recipe
        for (const oneIteratedObjectIngredient of oneIteratedIngredientsProperty) {

            // On ajoute sa propriété ingredient insensible à la casse au tableau des 254 ingrédients
            allIngredientsOfAllRecipesArr.push(oneIteratedObjectIngredient.ingredient.toLowerCase());
        };
    };

    // Stockage des 121 ingredients uniques après filtrage et tri alphabétique ascendant
    allUniqueIngredientsOfAllRecipesArr = allIngredientsOfAllRecipesArr
    .filter((x, i) => allIngredientsOfAllRecipesArr.indexOf(x) === i)
    .sort((a, b) => a.localeCompare(b, 'fr'));
        
    // On retourne le tableau des 121 ingredients uniques
    // console.log(allIngredientsOfAllRecipesArr);
    // console.log(allUniqueIngredientsOfAllRecipesArr);
    return allUniqueIngredientsOfAllRecipesArr;
};