'use strict';

import { getUniqueIngredientsNames } from "../get/getUniqueIngredientsNames.js";

export function createIngredientsNamesList(getRecipesJSON) {

    const allUniqueIngredientsOfAllRecipesArr = getUniqueIngredientsNames(getRecipesJSON);

    const INGREDIENTS_NAMES_WRAPPER = document.querySelector("#ingredients-list");

    for (const oneIteratedIngredientName of allUniqueIngredientsOfAllRecipesArr) {

        const ingredientNameLi = document.createElement("li");
        ingredientNameLi.className = "ingredient-name-li";
        ingredientNameLi.id = oneIteratedIngredientName;
        ingredientNameLi.tabIndex = 0;
        ingredientNameLi.dataset.propertyName = "ingredient";

        // console.log(ingredientNameLi.dataset.propertyName);

        // console.log("ingredient id:", ingredientNameLi.id);
        // console.log("ingredient:", ingredientNameLi);

        // const templateLi = `<span class = "ingredient-span-name">${oneIteratedIngredientName}</span>`;
        const templateLi = oneIteratedIngredientName;
        ingredientNameLi.innerHTML = templateLi;
        INGREDIENTS_NAMES_WRAPPER.appendChild(ingredientNameLi);
    }
    return INGREDIENTS_NAMES_WRAPPER;
};