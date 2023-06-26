'use strict';

// Import de la fonction de création des noms des ustensiles de toutes les recettes
import { createUstensilsNamesList } from "../create/createUstensilsNamesList.js";

import { getUniqueIngredientsNames } from "../get/getUniqueIngredientsNames.js";

import { createFilteredByTagNameIngredientsList } from "../create/createFilteredByTagNameIngredientsList.js";

import { getUniqueAppliancesNames } from "../get/getUniqueAppliancesNames.js";

import { createFilteredByTagNameAppliancesList } from "../create/createFilteredByTagNameAppliancesList.js";

import { getUniqueUstensilsNames } from "../get/getUniqueUstensilsNames.js";

import { createFilteredByTagNameUstensilsList } from "../create/createFilteredByTagNameUstensilsList.js";

export function ustensilsListeners(

    getRecipesJSON, handleClickOnTag, handleListToggle, handleInput,
    displayAllRecipes, searchRecipeByTagNameAndPropertyName, createOneTag, displayOneTag,
    searchItemsByTagName) {

    const ustensilsBtn = document.querySelector("#ustensils-btn-wrapper");
    const ustensilsListWrapper = document.querySelector("#ustensils-list");
    const ustensilsSearchInput = document.querySelector("#ustensils-search-input");
    const ustensilsForm = document.querySelector("#ustensils-form");
    const propertyName = "ustensil";

    // Récupération du prototype de la liste des ustensiles
    const USTENSILS_NAMES_LIST = createUstensilsNamesList(getRecipesJSON);
    // console.log("createUstensilsNamesList(getRecipesJSON) returns:", USTENSILS_NAMES_LIST);

    // Affichage de la liste HTML des ustensiles
    ustensilsListWrapper.innerHTML = USTENSILS_NAMES_LIST.innerHTML;


    ustensilsBtn.addEventListener("click", () => {
        // On vide l'input de son contenu
        ustensilsSearchInput.value = "";
        // Ouverture/Fermeture + Affichage/Masquage de la liste et de l'input du formulaire
        handleListToggle(ustensilsListWrapper, ustensilsSearchInput, propertyName);
    });


    ustensilsForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // On stocke la valeur du nom du tag sur ENTER event
        const tagNameValue = ustensilsSearchInput.value;
        console.log(tagNameValue);

        // On affiche le boutton tag après création via createOneTag()
        displayOneTag(createOneTag(tagNameValue, propertyName));

        // On masque la liste des ustensiles et l'input du formulaire
        ustensilsListWrapper.className = "hide";
        ustensilsSearchInput.className = "hide";
    });


    ustensilsSearchInput.addEventListener("input", (evt) => {
        handleInput(evt, propertyName, getRecipesJSON, 
            handleClickOnTag, searchRecipeByTagNameAndPropertyName,
            displayAllRecipes, createOneTag, displayOneTag, searchItemsByTagName,
            createFilteredByTagNameIngredientsList, getUniqueIngredientsNames,
            createFilteredByTagNameAppliancesList, getUniqueAppliancesNames,
            createFilteredByTagNameUstensilsList, getUniqueUstensilsNames);
    });

    
    const ustensilsItemsNodeList = ustensilsListWrapper.querySelectorAll("li");
    // console.log("ustensilsItemsNodeList vaut:", ustensilsItemsNodeList);

    ustensilsItemsNodeList.forEach(li => {
        li.addEventListener("click", (evt) => handleClickOnTag(evt, getRecipesJSON, 
            searchRecipeByTagNameAndPropertyName,
            displayAllRecipes, createOneTag, displayOneTag));
    })
};