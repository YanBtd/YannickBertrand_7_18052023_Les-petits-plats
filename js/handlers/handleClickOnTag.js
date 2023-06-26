'use strict';

// Gestion du clic sur un tag

export function handleClickOnTag(evt, getRecipesJSON, searchRecipeByTagNameAndPropertyName,
    displayAllRecipes, createOneTag, displayOneTag) {

    // Récupération du nom du lien
    const tagName = evt.target.id;
    console.log("tagName vaut:", evt.target.id);

    // Récupération de la valeur de son attribut data-tag-name
    const propertyName = evt.target.getAttribute("data-property-name");
    console.log("propertyName vaut:", propertyName);

    // Appel de la fonction de tri et récupération des recettes filtrées
    const filteredRecipeByTagNameAndPropertyNameArr = searchRecipeByTagNameAndPropertyName(tagName, propertyName, getRecipesJSON);

    // on vide la liste des recettes pour affichées les nouvelles filtrées
    const recipesList = document.querySelector(".recipes-list");
    recipesList.textContent = "";

    // Affichage des recettes filtrées
    displayAllRecipes(filteredRecipeByTagNameAndPropertyNameArr)

    // On affiche le boutton tag après création via createOneTag()
    displayOneTag(createOneTag(tagName, propertyName));
};