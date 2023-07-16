'use strict';

import { getIngredientsListOfAllFilteredRecipes } from "../get/getIngredientsListOfAllFilteredRecipes.js";

export function createFilteredIngredientsNamesList() {

    const allUniqueRecipesIngredientsTxtNamesArr = getIngredientsListOfAllFilteredRecipes();

    const FILTERED_INGREDIENTS_NAMES_LIST = document.querySelector("#ingredients-list");

    // on vide la liste des ingrédients pour afficher les nouveaux
    FILTERED_INGREDIENTS_NAMES_LIST.textContent = "";

    for (const oneIteratedIngredientName of allUniqueRecipesIngredientsTxtNamesArr) {

        const ingredientNameLi = document.createElement("li");
        ingredientNameLi.className = "ingredient-name-li";
        ingredientNameLi.id = oneIteratedIngredientName;
        ingredientNameLi.tabIndex = 0;
        ingredientNameLi.dataset.propertyName = "ingredient";

        // const templateLi = `<span class = "ingredient-span-name">${oneIteratedIngredientName}</span>`;

        const templateLi = oneIteratedIngredientName;
        ingredientNameLi.innerHTML = templateLi;
        FILTERED_INGREDIENTS_NAMES_LIST.appendChild(ingredientNameLi);
    }
    // console.log("FILTERED_INGREDIENTS_NAMES_LIST vaut:", FILTERED_INGREDIENTS_NAMES_LIST);

    return FILTERED_INGREDIENTS_NAMES_LIST;
};