'use strict';

import { createOneTag } from "../create/createOneTag.js";

import { displayOneTag } from "../display/displayOneTag.js"

export function appliancesListeners(createAppliancesNamesList, getRecipesJSON, handleClickOnTag, handleListToggle, handleInput) {

    // Appliances

    const appliancesBtn = document.querySelector("#appliances-btn-wrapper");
    const appliancesListWrapper = document.querySelector("#appliances-list");
    const appliancesSearchInput = document.querySelector("#appliances-search-input");
    const appliancesForm = document.querySelector("#appliances-form");
    appliancesListWrapper.innerHTML = createAppliancesNamesList(getRecipesJSON).innerHTML;

    appliancesForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // On stocke la valeur du nom du tag
        const tagNameValue = appliancesSearchInput.value;
        console.log(tagNameValue);

        const propertyName = "appliance";

        // On affiche le boutton tag après création via createOneTag()
        displayOneTag(createOneTag(tagNameValue, propertyName));

        appliancesListWrapper.className = "hide";
        appliancesSearchInput.className = "hide";
        appliancesSearchInput.value = "";
    });

    // console.log(appliancesSearchInput);

    appliancesBtn.addEventListener("click", () => {

        const ingredientsListWrapper = document.querySelector("#ingredients-list");
        ingredientsListWrapper.className = "hide";
        const ingredientsSearchInput = document.querySelector("#ingredients-search-input");
        ingredientsSearchInput.className = "hide";

        const ustensilsListWrapper = document.querySelector("#ustensils-list");
        ustensilsListWrapper.className = "hide";
        const ustensilsSearchInput = document.querySelector("#ustensils-search-input");
        ustensilsSearchInput.className = "hide";

        handleListToggle(appliancesListWrapper, appliancesSearchInput);
    });

    const appliancepropertyName = "appliance";
    appliancesSearchInput.addEventListener("input", (evt) => handleInput(evt, appliancepropertyName, getRecipesJSON));

    const appliancesItems = appliancesListWrapper.querySelectorAll("li");

    appliancesItems.forEach(li => {
        li.addEventListener("click", (evt) => handleClickOnTag(evt, getRecipesJSON));
    })
};