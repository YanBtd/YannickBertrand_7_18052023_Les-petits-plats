'use strict';

import { getUniqueIngredientsNames } from "./getUniqueIngredientsNames.js";

export function createIngredientsNamesList() {

    const allUniqueIngredientsOfAllRecipesArr = getUniqueIngredientsNames();

    const INGREDIENTS_NAMES_WRAPPER = document.querySelector("#ingredients-list");

    for (const oneIteratedIngredientName of allUniqueIngredientsOfAllRecipesArr) {

        const ingredientNameItem = document.createElement("li");
        ingredientNameItem.className = "ingredient-name-li";

        const templateLi = `<span class = "ingredient-span-name">${oneIteratedIngredientName}</span>`;
        ingredientNameItem.innerHTML = templateLi;
        INGREDIENTS_NAMES_WRAPPER.appendChild(ingredientNameItem);
    }
    return INGREDIENTS_NAMES_WRAPPER;
};