'use strict';

// Import de la fonction de création des noms des appareils de toutes les recettes
import { createAppliancesNamesList } from "../create/createAppliancesNamesList.js";

import { getUniqueIngredientsNames } from "../get/getUniqueIngredientsNames.js";

import { createFilteredByTagNameIngredientsList } from "../create/createFilteredByTagNameIngredientsList.js";

import { getUniqueAppliancesNames } from "../get/getUniqueAppliancesNames.js";

import { createFilteredByTagNameAppliancesList } from "../create/createFilteredByTagNameAppliancesList.js";

import { getUniqueUstensilsNames } from "../get/getUniqueUstensilsNames.js";

import { createFilteredByTagNameUstensilsList } from "../create/createFilteredByTagNameUstensilsList.js";

export function appliancesListeners(

    getRecipesJSON, handleClickOnTag, handleListToggle, handleInput,
    displayAllRecipes, searchRecipeByTagNameAndPropertyName, createOneTag, displayOneTag,
    searchItemsByTagName) {

    const appliancesBtn = document.querySelector("#appliances-btn-wrapper");
    const appliancesListWrapper = document.querySelector("#appliances-list");
    const appliancesSearchInput = document.querySelector("#appliances-search-input");
    const appliancesForm = document.querySelector("#appliances-form");
    const propertyName = "appliance";

    // Récupération du prototype de la liste des appareils
    const APPLIANCES_NAMES_LIST = createAppliancesNamesList(getRecipesJSON);
    // console.log("createAppliancesNamesList(getRecipesJSON) returns:", APPLIANCES_NAMES_LIST);

    // Affichage de la liste HTML des appareils
    appliancesListWrapper.innerHTML = APPLIANCES_NAMES_LIST.innerHTML;


    appliancesBtn.addEventListener("click", () => {
        // On vide l'input de son contenu
        appliancesSearchInput.value = "";
        // Ouverture/Fermeture + Affichage/Masquage de la liste et de l'input du formulaire
        handleListToggle(appliancesListWrapper, appliancesSearchInput, propertyName);
    });


    appliancesForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // On stocke la valeur du nom du tag
        const tagNameValue = appliancesSearchInput.value;
        console.log(tagNameValue);

        // On affiche le boutton tag après création via createOneTag()
        displayOneTag(createOneTag(tagNameValue, propertyName));

        // On masque la liste des appareils et l'input du formulaire
        appliancesListWrapper.className = "hide";
        appliancesSearchInput.className = "hide";
    });

    
    appliancesSearchInput.addEventListener("input", (evt) => {
        handleInput(evt, propertyName, getRecipesJSON, 
            handleClickOnTag, searchRecipeByTagNameAndPropertyName,
            displayAllRecipes, createOneTag, displayOneTag, searchItemsByTagName,
            createFilteredByTagNameIngredientsList, getUniqueIngredientsNames,
            createFilteredByTagNameAppliancesList, getUniqueAppliancesNames,
            createFilteredByTagNameUstensilsList, getUniqueUstensilsNames);
    });


    const appliancesItemsNodeList = appliancesListWrapper.querySelectorAll("li");
    // console.log("appliancesItemsNodeList vaut:", appliancesItemsNodeList);

    appliancesItemsNodeList.forEach(li => {
        li.addEventListener("click", (evt) => handleClickOnTag(evt, getRecipesJSON, 
            searchRecipeByTagNameAndPropertyName,
            displayAllRecipes, createOneTag, displayOneTag));
    });
};