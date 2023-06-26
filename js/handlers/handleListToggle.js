'use strict';

export function handleListToggle(listWrapper, searchInput, propertyName) {

    const classValue = listWrapper.getAttribute("class");
    // console.log("class vaut:", classValue);

    // console.log("propertyName vaut:", propertyName);

    if (propertyName == "ingredient") {

        const appliancesListWrapper = document.querySelector("#appliances-list");
        appliancesListWrapper.className = "hide";
        const appliancesSearchInput = document.querySelector("#appliances-search-input");
        appliancesSearchInput.className = "hide";

        const ustensilsListWrapper = document.querySelector("#ustensils-list");
        ustensilsListWrapper.className = "hide";
        const ustensilsSearchInput = document.querySelector("#ustensils-search-input");
        ustensilsSearchInput.className = "hide";

    } else if (propertyName == "appliance") {

        const ingredientsListWrapper = document.querySelector("#ingredients-list");
        ingredientsListWrapper.className = "hide";
        const ingredientsSearchInput = document.querySelector("#ingredients-search-input");
        ingredientsSearchInput.className = "hide";

        const ustensilsListWrapper = document.querySelector("#ustensils-list");
        ustensilsListWrapper.className = "hide";
        const ustensilsSearchInput = document.querySelector("#ustensils-search-input");
        ustensilsSearchInput.className = "hide";

    } else if (propertyName == "ustensil") {

        const ingredientsListWrapper = document.querySelector("#ingredients-list");
        ingredientsListWrapper.className = "hide";
        const ingredientsSearchInput = document.querySelector("#ingredients-search-input");
        ingredientsSearchInput.className = "hide";

        const appliancesListWrapper = document.querySelector("#appliances-list");
        appliancesListWrapper.className = "hide";
        const appliancesSearchInput = document.querySelector("#appliances-search-input");
        appliancesSearchInput.className = "hide";
    }

    if (classValue == "hide") {

        listWrapper.className = "grid";
        // console.log("newClassValue vaut:", listWrapper.getAttribute("class"));
        searchInput.className = "show";
        searchInput.focus();

    } else {
        
        listWrapper.className = "hide";
        // console.log("newClassValue vaut:", listWrapper.getAttribute("class"));
        searchInput.className = "hide";
    }
};