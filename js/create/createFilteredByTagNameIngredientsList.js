'use strict';

export function createFilteredByTagNameIngredientsList(getUniqueIngredientsNames, getRecipesJSON,
    searchItemsByTagName) {

    const FILTERED_INGREDIENTS_LIST = document.querySelector("#ingredients-list");
    FILTERED_INGREDIENTS_LIST.textContent = "";

    const ingredientsSearchInput = document.querySelector("#ingredients-search-input");

    const ingredientsItemsArr = getUniqueIngredientsNames(getRecipesJSON);
    console.log("getUniqueIngredientsNames(getRecipesJSON) returns:", ingredientsItemsArr);

    const tagNameValue = ingredientsSearchInput.value;
    console.log(tagNameValue);

    let filteredItemsByTagNameArr = searchItemsByTagName(tagNameValue, ingredientsItemsArr);
    console.log("searchItemsByTagName(tagNameValue, ingredientsItemsArr) returns:", filteredItemsByTagNameArr);

    for (const oneIteratedIngredientName of filteredItemsByTagNameArr) {

        const ingredientNameLi = document.createElement("li");
        ingredientNameLi.className = "ingredient-name-li";
        ingredientNameLi.id = oneIteratedIngredientName;
        ingredientNameLi.dataset.propertyName = "ingredient";
        
        const templateLi = oneIteratedIngredientName;
        ingredientNameLi.innerHTML = templateLi;
        FILTERED_INGREDIENTS_LIST.appendChild(ingredientNameLi);
    };
    console.log(FILTERED_INGREDIENTS_LIST);
    return FILTERED_INGREDIENTS_LIST;
};