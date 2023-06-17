'use strict';

// Gestion de la recherche des recettes pour un tag et sa propriété

export function searchRecipeByPropertyName(tagName, propertyName, getRecipesJSON) {

    // Tableau de stockage des recettes filtrées
    let filteredArrByTagName = [];

    if (propertyName === "ingredient") {
        filteredArrByTagName = getRecipesJSON().filter(
            recipeData =>
                recipeData.ingredients.some(el => el.ingredient.toLowerCase().includes(tagName)));
        ;
        // console.log(filteredArrByTagName);

    } else if (propertyName === "appliance") {
        filteredArrByTagName = getRecipesJSON().filter(
            recipeData =>
                recipeData.appliance.toLowerCase().includes(tagName));
        ;
        // console.log(filteredArrByTagName);

    } else {
        filteredArrByTagName = getRecipesJSON().filter(
            recipeData =>
                recipeData.ustensils.some(el => el.toLowerCase().includes(tagName)));
        ;
        // console.log(filteredArrByTagName);
    }
    return filteredArrByTagName;
};