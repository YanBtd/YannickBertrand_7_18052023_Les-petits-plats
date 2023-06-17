'use strict';

export function ingredientsListeners(createIngredientsNamesList, getRecipesJSON, handleClick, toggleList, handleInput) {

    // Ingredients

    const ingredientsBtn = document.querySelector("#ingredients-btn-wrapper");
    const ingredientsListWrapper = document.querySelector("#ingredients-list");
    const ingredientsSearchInput = document.querySelector("#ingredients-search-input");
    const ingredientsForm = document.querySelector("#ingredients-form");
    ingredientsListWrapper.innerHTML = createIngredientsNamesList(getRecipesJSON).innerHTML;

    ingredientsForm.addEventListener("submit", function (event) {
        event.preventDefault();
        ingredientsListWrapper.className = "hide";
        ingredientsSearchInput.className = "hide";
        ingredientsSearchInput.value = "";
    });

    // console.log(ingredientsForm)

    ingredientsBtn.addEventListener("click", () => {
        toggleList(ingredientsListWrapper, ingredientsSearchInput);
    });

    const ingredientpropertyName = "ingredient";
    ingredientsSearchInput.addEventListener("input", (evt) => handleInput(evt, ingredientpropertyName, getRecipesJSON));
    // ingredientsSearchInput.addEventListener("input", handleInput(ingredientpropertyName));

    // ingredientsBtn.addEventListener("blur", (evt) => {
    //     // evt.preventDefault();
    //     ingredientsListWrapper.className = "hide";
    //     ingredientsSearchInput.className = "hide";
    // });

    const ingredientsItems = ingredientsListWrapper.querySelectorAll("li");

    ingredientsItems.forEach(li => {
        li.addEventListener("click", (evt) => handleClick(evt, getRecipesJSON));
    });
};