'use strict';

import { getUniqueUstensilsNames } from "../get/getUniqueUstensilsNames.js";

export function createUstensilsNamesList(getRecipesJSON) {

    const allUniqueUstensilsOfAllRecipesArr = getUniqueUstensilsNames(getRecipesJSON);
    // console.log(allUniqueUstensilsOfAllRecipesArr);

    const USTENSILS_NAMES_LIST = document.querySelector("#ustensils-list");

    for (const oneIteratedUstensilName of allUniqueUstensilsOfAllRecipesArr) {

        const ustensilNameLi = document.createElement("li");
        ustensilNameLi.className = "ustensil-name-li";
        ustensilNameLi.id = oneIteratedUstensilName;
        ustensilNameLi.tabIndex = 0;
        ustensilNameLi.dataset.propertyName = "ustensil";

        // const templateLi = `<span class = "ustensil-span-name">${oneIteratedUstensilName}</span>`;

        const templateLi = oneIteratedUstensilName;
        ustensilNameLi.innerHTML = templateLi;
        USTENSILS_NAMES_LIST.appendChild(ustensilNameLi);
    }
    // console.log(USTENSILS_NAMES_LIST.outerHTML);
    // console.log(USTENSILS_NAMES_LIST.innerHTML);
    // console.log(USTENSILS_NAMES_LIST);

    return USTENSILS_NAMES_LIST;
};