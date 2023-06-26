'use strict';

import { getUniqueIngredientsNames } from "../get/getUniqueIngredientsNames.js";

export function createIngredientsNamesList(getRecipesJSON) {

    const allUniqueIngredientsOfAllRecipesArr = getUniqueIngredientsNames(getRecipesJSON);
    // console.log(allUniqueIngredientsOfAllRecipesArr);

    const INGREDIENTS_NAMES_LIST = document.querySelector("#ingredients-list");

    for (const oneIteratedIngredientName of allUniqueIngredientsOfAllRecipesArr) {

        const ingredientNameLi = document.createElement("li");
        ingredientNameLi.className = "ingredient-name-li";
        ingredientNameLi.id = oneIteratedIngredientName;
        ingredientNameLi.tabIndex = 0;
        ingredientNameLi.dataset.propertyName = "ingredient";

        // const templateLi = `<span class = "ingredient-span-name">${oneIteratedIngredientName}</span>`;

        const templateLi = oneIteratedIngredientName;
        ingredientNameLi.innerHTML = templateLi;
        INGREDIENTS_NAMES_LIST.appendChild(ingredientNameLi);
    }
    // console.log(INGREDIENTS_NAMES_LIST.outerHTML);
    // console.log(INGREDIENTS_NAMES_LIST.innerHTML);
    // console.log(INGREDIENTS_NAMES_LIST);

    return INGREDIENTS_NAMES_LIST;
};