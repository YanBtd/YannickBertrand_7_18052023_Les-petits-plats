'use strict';

import { createOneTag } from "../create/createOneTag.js";

import { displayOneTag } from "../display/displayOneTag.js"

export function ingredientsListeners(createIngredientsNamesList, getRecipesJSON, handleClickOnTag, handleListToggle, handleInput) {

    // Ingredients

    const ingredientsBtn = document.querySelector("#ingredients-btn-wrapper");
    const ingredientsListWrapper = document.querySelector("#ingredients-list");
    const ingredientsSearchInput = document.querySelector("#ingredients-search-input");
    const ingredientsForm = document.querySelector("#ingredients-form");
    ingredientsListWrapper.innerHTML = createIngredientsNamesList(getRecipesJSON).innerHTML;

    ingredientsForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // On stocke la valeur du nom du tag
        const tagNameValue = ingredientsSearchInput.value;
        console.log(tagNameValue);

        const propertyName = "ingredient";

        // On affiche le boutton tag après création via createOneTag()
        displayOneTag(createOneTag(tagNameValue, propertyName));

        ingredientsListWrapper.className = "hide";
        ingredientsSearchInput.className = "hide";
        ingredientsSearchInput.value = "";
    });

    // console.log(ingredientsSearchInput)

    ingredientsBtn.addEventListener("click", () => {

        // console.log(evt);


        // let initialOpenedState = ingredientsBtn.getAttribute("data-opened-state");
        // console.log("initialOpenedState vaut:", initialOpenedState);

        // ingredientsBtn.setAttribute("data-opened-state", "true");

        // const appliancesBtn = document.querySelector("#appliances-btn-wrapper");
        // appliancesBtn.setAttribute("data-opened-state", "false");

        const appliancesListWrapper = document.querySelector("#appliances-list");
        appliancesListWrapper.className = "hide";
        const appliancesSearchInput = document.querySelector("#appliances-search-input");
        appliancesSearchInput.className = "hide";

        // const ustensilsBtn = document.querySelector("#ustensils-btn-wrapper");
        // ustensilsBtn.setAttribute("data-opened-state", "false");

        const ustensilsListWrapper = document.querySelector("#ustensils-list");
        ustensilsListWrapper.className = "hide";
        const ustensilsSearchInput = document.querySelector("#ustensils-search-input");
        ustensilsSearchInput.className = "hide";
      
        // let newOpenedState = ingredientsBtn.getAttribute("data-opened-state");
        // console.log("newOpenedState vaut:", newOpenedState);

        handleListToggle(ingredientsListWrapper, ingredientsSearchInput);
    });

    const ingredientpropertyName = "ingredient";
    ingredientsSearchInput.addEventListener("input", (evt) => {
        handleInput(evt, ingredientpropertyName, getRecipesJSON);
    });

    // ingredientsBtn.addEventListener("blur", (evt) => {
    //     // evt.preventDefault();
    //     ingredientsListWrapper.className = "hide";
    //     ingredientsSearchInput.className = "hide";
    // });

    const ingredientsItems = ingredientsListWrapper.querySelectorAll("li");

    ingredientsItems.forEach(li => {

        // const propertyName = "ingredient";

        li.addEventListener("click", (evt) => handleClickOnTag(evt, getRecipesJSON));
    });
};