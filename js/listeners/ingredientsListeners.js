'use strict';

// Import de la fonction de création des noms des ingrédients de toutes les recettes
import { createIngredientsNamesList } from "../create/createIngredientsNamesList.js";

import { getUniqueIngredientsNames } from "../get/getUniqueIngredientsNames.js";

import { createFilteredByTagNameIngredientsList } from "../create/createFilteredByTagNameIngredientsList.js";

import { getUniqueAppliancesNames } from "../get/getUniqueAppliancesNames.js";

import { createFilteredByTagNameAppliancesList } from "../create/createFilteredByTagNameAppliancesList.js";

import { getUniqueUstensilsNames } from "../get/getUniqueUstensilsNames.js";

import { createFilteredByTagNameUstensilsList } from "../create/createFilteredByTagNameUstensilsList.js";

export function ingredientsListeners(

    getRecipesJSON, handleClickOnTag, handleListToggle, handleInput,
    displayAllRecipes, searchRecipeByTagNameAndPropertyName, createOneTag, displayOneTag,
    searchItemsByTagName) {

    const ingredientsBtn = document.querySelector("#ingredients-btn-wrapper");
    const ingredientsListWrapper = document.querySelector("#ingredients-list");
    const ingredientsSearchInput = document.querySelector("#ingredients-search-input");
    const ingredientsForm = document.querySelector("#ingredients-form");
    const propertyName = "ingredient";

    // Récupération du prototype de la liste des ingrédients
    const INGREDIENTS_NAMES_LIST = createIngredientsNamesList(getRecipesJSON);
    // console.log("createIngredientsNamesList(getRecipesJSON) returns:", INGREDIENTS_NAMES_LIST);

    // Affichage de la liste HTML des ingrédients
    ingredientsListWrapper.innerHTML = INGREDIENTS_NAMES_LIST.innerHTML;


    ingredientsBtn.addEventListener("click", () => {
        // On vide l'input de son contenu
        ingredientsSearchInput.value = "";
        // Ouverture/Fermeture + Affichage/Masquage de la liste et de l'input du formulaire
        handleListToggle(ingredientsListWrapper, ingredientsSearchInput, propertyName);
    });


    ingredientsForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // On stocke la valeur du nom du tag
        const tagNameValue = ingredientsSearchInput.value;
        console.log(tagNameValue);

        // On affiche le boutton tag après création via createOneTag()
        displayOneTag(createOneTag(tagNameValue, propertyName));

        // On masque la liste des ingrédients et l'input du formulaire
        ingredientsListWrapper.className = "hide";
        ingredientsSearchInput.className = "hide";
    });


    ingredientsSearchInput.addEventListener("input", (evt) => {
        handleInput(evt, propertyName, getRecipesJSON, 
            handleClickOnTag, searchRecipeByTagNameAndPropertyName,
            displayAllRecipes, createOneTag, displayOneTag, searchItemsByTagName,
            createFilteredByTagNameIngredientsList, getUniqueIngredientsNames,
            createFilteredByTagNameAppliancesList, getUniqueAppliancesNames,
            createFilteredByTagNameUstensilsList, getUniqueUstensilsNames);
    });


    const ingredientsItemsNodeList = ingredientsListWrapper.querySelectorAll("li");
    // console.log("ingredientsItemsNodeList vaut:", ingredientsItemsNodeList);

    ingredientsItemsNodeList.forEach(li => {
        li.addEventListener("click", (evt) => handleClickOnTag(evt, getRecipesJSON, 
            searchRecipeByTagNameAndPropertyName,
            displayAllRecipes, createOneTag, displayOneTag));
    });
};