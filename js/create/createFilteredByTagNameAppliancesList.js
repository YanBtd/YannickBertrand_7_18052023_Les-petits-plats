'use strict';

export function createFilteredByTagNameAppliancesList(getUniqueAppliancesNames, getRecipesJSON, 
    searchItemsByTagName) {

    const FILTERED_APPLIANCES_LIST = document.querySelector("#appliances-list");
    FILTERED_APPLIANCES_LIST.textContent = "";

    const appliancesSearchInput = document.querySelector("#appliances-search-input");

    const appliancesItemsArr = getUniqueAppliancesNames(getRecipesJSON);
    console.log("getUniqueAppliancesNames(getRecipesJSON) returns", appliancesItemsArr);

    const tagNameValue = appliancesSearchInput.value;
    console.log(tagNameValue);

    let filteredItemsByTagNameArr = searchItemsByTagName(tagNameValue, appliancesItemsArr);
    console.log("searchItemsByTagName(tagNameValue, appliancesItemsArr) returns:", filteredItemsByTagNameArr);

    for (const oneIteratedApplianceName of filteredItemsByTagNameArr) {
        const applianceNameLi = document.createElement("li");
        applianceNameLi.className = "appliance-name-li";
        applianceNameLi.id = oneIteratedApplianceName;
        applianceNameLi.dataset.propertyName = "appliance";
        const templateLi = oneIteratedApplianceName;
        applianceNameLi.innerHTML = templateLi;
        FILTERED_APPLIANCES_LIST.appendChild(applianceNameLi);
    };
    console.log(FILTERED_APPLIANCES_LIST);
    return FILTERED_APPLIANCES_LIST;
};