'use strict';

export function ustensilsListeners(createUstensilsNamesList, getRecipesJSON, handleClick, toggleList, handleInput) {

    // Ustensils

    const ustensilsBtn = document.querySelector("#ustensils-btn-wrapper");
    const ustensilsListWrapper = document.querySelector("#ustensils-list");
    const ustensilsSearchInput = document.querySelector("#ustensils-search-input");
    const ustensilsForm = document.querySelector("#ustensils-form");
    ustensilsListWrapper.innerHTML = createUstensilsNamesList(getRecipesJSON).innerHTML;

    ustensilsForm.addEventListener("submit", function (event) {
        event.preventDefault();
        ustensilsListWrapper.className = "hide";
        ustensilsSearchInput.className = "hide";
        ustensilsSearchInput.value = "";
    });

    // console.log(ustensilsSearchInput);

    ustensilsBtn.addEventListener("click", () => {
        toggleList(ustensilsListWrapper, ustensilsSearchInput);
    });

    const ustensilpropertyName = "ustensil";
    ustensilsSearchInput.addEventListener("input", (evt) => handleInput(evt, ustensilpropertyName, getRecipesJSON));

    const ustensilsItems = ustensilsListWrapper.querySelectorAll("button");

    ustensilsItems.forEach(li => {
        li.addEventListener("click", (evt) => handleClick(evt, getRecipesJSON));
    })
};