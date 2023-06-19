'use strict';

import { createOneTag } from "../create/createOneTag.js";

import { displayOneTag } from "../display/displayOneTag.js"

export function ustensilsListeners(createUstensilsNamesList, getRecipesJSON, handleClickOnTag, handleListToggle, handleInput) {

    // Ustensils

    const ustensilsBtn = document.querySelector("#ustensils-btn-wrapper");
    const ustensilsListWrapper = document.querySelector("#ustensils-list");
    const ustensilsSearchInput = document.querySelector("#ustensils-search-input");
    const ustensilsForm = document.querySelector("#ustensils-form");
    ustensilsListWrapper.innerHTML = createUstensilsNamesList(getRecipesJSON).innerHTML;

    ustensilsForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // On stocke la valeur du nom du tag
        const tagNameValue = ustensilsSearchInput.value;
        console.log(tagNameValue);

        const propertyName = "ustensil";

        // On affiche le boutton tag après création via createOneTag()
        displayOneTag(createOneTag(tagNameValue, propertyName));

        ustensilsListWrapper.className = "hide";
        ustensilsSearchInput.className = "hide";
        ustensilsSearchInput.value = "";
    });

    // console.log(ustensilsSearchInput);

    ustensilsBtn.addEventListener("click", () => {

        const ingredientsListWrapper = document.querySelector("#ingredients-list");
        ingredientsListWrapper.className = "hide";
        const ingredientsSearchInput = document.querySelector("#ingredients-search-input");
        ingredientsSearchInput.className = "hide";

        const appliancesListWrapper = document.querySelector("#appliances-list");
        appliancesListWrapper.className = "hide";
        const appliancesSearchInput = document.querySelector("#appliances-search-input");
        appliancesSearchInput.className = "hide";

        handleListToggle(ustensilsListWrapper, ustensilsSearchInput);
    });

    const ustensilpropertyName = "ustensil";
    ustensilsSearchInput.addEventListener("input", (evt) => handleInput(evt, ustensilpropertyName, getRecipesJSON));

    const ustensilsItems = ustensilsListWrapper.querySelectorAll("button");

    ustensilsItems.forEach(li => {
        li.addEventListener("click", (evt) => handleClickOnTag(evt, getRecipesJSON));
    })
};