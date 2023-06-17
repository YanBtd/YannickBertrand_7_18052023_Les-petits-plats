'use strict';

import { getUniqueUstensilsNames } from "../get/getUniqueUstensilsNames.js";

export function createUstensilsNamesList(getRecipesJSON) {

    const allUniqueUstensilsOfAllRecipesArr = getUniqueUstensilsNames(getRecipesJSON);

    const USTENSILS_NAMES_WRAPPER = document.querySelector("#ustensils-list");

    for (const oneIteratedUstensilName of allUniqueUstensilsOfAllRecipesArr) {

        const ustensilNameLi = document.createElement("button");
        ustensilNameLi.type = "button";
        ustensilNameLi.className = "ustensil-name-li";
        // ustensilNameLi.value = oneIteratedUstensilName;
        ustensilNameLi.id = oneIteratedUstensilName;
        ustensilNameLi.dataset.propertyName = "ustensil";

        // console.log(ustensilNameLi.dataset.propertyName);

        // console.log("ustensil:", ustensilNameLi);

        // const templateLi = `<span class = "ustensil-span-name">${oneIteratedUstensilName}</span>`;
        const templateLi = oneIteratedUstensilName;
        ustensilNameLi.innerHTML = templateLi;
        USTENSILS_NAMES_WRAPPER.appendChild(ustensilNameLi);
    }
    return USTENSILS_NAMES_WRAPPER;
};