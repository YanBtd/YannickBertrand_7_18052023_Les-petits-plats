'use strict';

import { getUniqueUstensilsNames } from "./getUniqueUstensilsNames.js";

export function createUstensilsNamesList() {

    const allUniqueUstensilsOfAllRecipesArr = getUniqueUstensilsNames();

    const INGREDIENTS_NAMES_WRAPPER = document.querySelector("#ustensils-list");

    for (const oneIteratedUstensilName of allUniqueUstensilsOfAllRecipesArr) {

        const ustensilNameItem = document.createElement("button");
        ustensilNameItem.type = "button";
        ustensilNameItem.className = "ustensil-name-li";
        ustensilNameItem.value = oneIteratedUstensilName;
        ustensilNameItem.id = oneIteratedUstensilName;

        // console.log(ustensilNameItem.id)

        // const templateLi = `<span class = "ustensil-span-name">${oneIteratedUstensilName}</span>`;
        const templateLi = oneIteratedUstensilName;
        ustensilNameItem.innerHTML = templateLi;
        INGREDIENTS_NAMES_WRAPPER.appendChild(ustensilNameItem);
    }
    return INGREDIENTS_NAMES_WRAPPER;
};