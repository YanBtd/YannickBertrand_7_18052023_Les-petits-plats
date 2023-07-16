'use strict';

import { getUstensilsListOfAllFilteredRecipes } from "../get/getUstensilsListOfAllFilteredRecipes.js";

export function createFilteredUstensilsNamesList(getRecipesJSON) {

    const allUniqueRecipesUstensilsTxtNamesArr = getUstensilsListOfAllFilteredRecipes(getRecipesJSON);

    const FILTERED_USTENSILS_NAMES_LIST = document.querySelector("#ustensils-list");

    // on vide la liste des ustensiles pour afficher les nouveaux
    FILTERED_USTENSILS_NAMES_LIST.textContent = "";

    for (const oneIteratedUstensilName of allUniqueRecipesUstensilsTxtNamesArr) {

        const ustensilNameLi = document.createElement("li");
        ustensilNameLi.className = "ustensil-name-li";
        ustensilNameLi.id = oneIteratedUstensilName;
        ustensilNameLi.tabIndex = 0;
        ustensilNameLi.dataset.propertyName = "ustensil";

        // const templateLi = `<span class = "ingredient-span-name">${oneIteratedUstensilName}</span>`;

        const templateLi = oneIteratedUstensilName;
        ustensilNameLi.innerHTML = templateLi;
        FILTERED_USTENSILS_NAMES_LIST.appendChild(ustensilNameLi);
    }
    // console.log("FILTERED_USTENSILS_NAMES_LIST vaut:", FILTERED_USTENSILS_NAMES_LIST);

    return FILTERED_USTENSILS_NAMES_LIST;
};