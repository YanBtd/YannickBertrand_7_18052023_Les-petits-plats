'use strict';

// Gestion de la recherche des recettes pour un tag et sa propriété

export function searchRecipeByTagNameAndPropertyName(tagName, propertyName, getRecipesJSON) {

    // Tableau de stockage des recettes filtrées par nom de tag et nom propriété
    let filteredArrByTagNameAndPropertyName = [];

    if (propertyName === "ingredient") {
        filteredArrByTagNameAndPropertyName = getRecipesJSON().filter(
            recipeData =>
                recipeData.ingredients.some(el => el.ingredient.toLowerCase().includes(tagName)));
        ;
        console.log(filteredArrByTagNameAndPropertyName);

    } else if (propertyName === "appliance") {
        filteredArrByTagNameAndPropertyName = getRecipesJSON().filter(
            recipeData =>
                recipeData.appliance.toLowerCase().includes(tagName));
        ;
        console.log(filteredArrByTagNameAndPropertyName);

    } else {
        filteredArrByTagNameAndPropertyName = getRecipesJSON().filter(
            recipeData =>
                recipeData.ustensils.some(el => el.toLowerCase().includes(tagName)));
        ;
        console.log(filteredArrByTagNameAndPropertyName);
    }
    return filteredArrByTagNameAndPropertyName;
};