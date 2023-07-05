'use strict';

import { tagFactory } from "../factories/tagFactory.js";

// Gestion d'un tag passé à l'input

export function handleInput(evt, propertyName, getRecipesJSON, handleClickOnTag, 
    searchRecipeByTagNameAndPropertyName,
    displayAllRecipes, createOneTag, displayOneTag, searchItemsByTagName,
    createFilteredByTagNameIngredientsList, getUniqueIngredientsNames, 
    createFilteredByTagNameAppliancesList, getUniqueAppliancesNames,
    createFilteredByTagNameUstensilsList, getUniqueUstensilsNames) {

    console.log("Bienvenue dans l'input !");
    console.log("propertyName passé par le Listener vaut:", propertyName);

    const tagName = evt.target.value;
    console.log("tagName vaut:", tagName);

    const recipesList = document.querySelector(".recipes-list");
    recipesList.textContent = "";

    // Récupération de la valeur de l'input
    const searchedString = evt.target.value.toLowerCase();
    console.log("Récupération de evt.target.value qui vaut:", searchedString);
    
    // On appelle la fonction de recherche des recettes
    console.log("Appel de searchRecipeByTagNameAndPropertyName(searchedString, propertyName, getRecipesJSON)");
    const filteredRecipeByTagNameAndPropertyNameArr = searchRecipeByTagNameAndPropertyName(
        searchedString, propertyName, getRecipesJSON)
    ;

    // On appelle la fonction d'affichage des recettes
    console.log("Appel de displayAllRecipes(filteredRecipeByTagNameAndPropertyNameArr) ")
    displayAllRecipes(filteredRecipeByTagNameAndPropertyNameArr);

    let FILTERED_BY_TAG_NAME_LIST = "";

    // Appel de createFilteredByTagNameIngredientsList()
    console.log("Appel de createFilteredByTagNameIngredientsList()")

    if (propertyName == "ingredient") {

        // On appelle la fonction de création de la liste des ingrédients filtrée par nom de tag
        FILTERED_BY_TAG_NAME_LIST = createFilteredByTagNameIngredientsList(getUniqueIngredientsNames,
            getRecipesJSON, searchItemsByTagName)
        ;

    } else if (propertyName == "appliance") {

        // On appelle la fonction de création de la liste des appareils filtrée par nom de tag
        FILTERED_BY_TAG_NAME_LIST = createFilteredByTagNameAppliancesList(getUniqueAppliancesNames,
            getRecipesJSON, searchItemsByTagName)
        ;

    } else if(propertyName == "ustensil") {

        // On appelle la fonction de création de la liste des ustensiles filtrée par nom de tag
        FILTERED_BY_TAG_NAME_LIST = createFilteredByTagNameUstensilsList(getUniqueUstensilsNames,
            getRecipesJSON, searchItemsByTagName)
        ;
    }

    // On récupère tous les enfants de la liste filtrée
    const filterdedItemsNodeList = FILTERED_BY_TAG_NAME_LIST.querySelectorAll("li");
    console.log("Récupération des li de la liste filtrée", filterdedItemsNodeList);

    // On appelle la fonction de gestion des clicks sur chaque enfant auquel
    // on greffe au préalable un listener sur le click

    filterdedItemsNodeList.forEach(li => {
        li.addEventListener("click", (evt) => handleClickOnTag(evt, getRecipesJSON, 
            searchRecipeByTagNameAndPropertyName,
            displayAllRecipes, createOneTag, displayOneTag));
    });
};