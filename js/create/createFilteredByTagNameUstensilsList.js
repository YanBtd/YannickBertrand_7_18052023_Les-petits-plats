'use strict';

export function createFilteredByTagNameUstensilsList(getUniqueUstensilsNames, getRecipesJSON, 
    searchItemsByTagName) {

    const FILTERED_USTENSILS_LIST = document.querySelector("#ustensils-list");
    FILTERED_USTENSILS_LIST.textContent = "";

    const ustensilsSearchInput = document.querySelector("#ustensils-search-input");

    const ustensilsItemsArr = getUniqueUstensilsNames(getRecipesJSON);
    console.log("getUniqueUstensilsNames(getRecipesJSON) returns:", ustensilsItemsArr);

    const tagNameValue = ustensilsSearchInput.value;
    console.log(tagNameValue);

    let filteredItemsByTagNameArr = searchItemsByTagName(tagNameValue, ustensilsItemsArr);
    console.log("searchItemsByTagName(tagNameValue, ustensilsItemsArr) returns:", filteredItemsByTagNameArr);

    for (const oneIteratedUstensilName of filteredItemsByTagNameArr) {
        const ustensilNameLi = document.createElement("li");
        ustensilNameLi.className = "ustensil-name-li";
        ustensilNameLi.id = oneIteratedUstensilName;
        ustensilNameLi.dataset.propertyName = "ustensil";
        const templateLi = oneIteratedUstensilName;
        ustensilNameLi.innerHTML = templateLi;
        FILTERED_USTENSILS_LIST.appendChild(ustensilNameLi);
    };
    console.log(FILTERED_USTENSILS_LIST);
    return FILTERED_USTENSILS_LIST;
};