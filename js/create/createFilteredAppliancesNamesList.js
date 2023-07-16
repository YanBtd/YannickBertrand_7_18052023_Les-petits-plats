'use strict';

import { getAppliancesListOfAllFilteredRecipes } from "../get/getAppliancesListOfAllFilteredRecipes.js";

export function createFilteredAppliancesNamesList(getRecipesJSON) {

    const allUniqueRecipesAppliancesTxtNamesArr = getAppliancesListOfAllFilteredRecipes(getRecipesJSON);

    const FILTERED_APPLIANCES_NAMES_LIST = document.querySelector("#appliances-list");

    // on vide la liste des appareils pour afficher les nouveaux
    FILTERED_APPLIANCES_NAMES_LIST.textContent = "";

    for (const oneIteratedApplianceName of allUniqueRecipesAppliancesTxtNamesArr) {

        const applianceNameLi = document.createElement("li");
        applianceNameLi.className = "appliance-name-li";
        applianceNameLi.id = oneIteratedApplianceName;
        applianceNameLi.tabIndex = 0;
        applianceNameLi.dataset.propertyName = "appliance";

        // const templateLi = `<span class = "ingredient-span-name">${oneIteratedApplianceName}</span>`;

        const templateLi = oneIteratedApplianceName;
        applianceNameLi.innerHTML = templateLi;
        FILTERED_APPLIANCES_NAMES_LIST.appendChild(applianceNameLi);
    }
    // console.log("FILTERED_APPLIANCES_NAMES_LIST vaut:", FILTERED_APPLIANCES_NAMES_LIST);

    return FILTERED_APPLIANCES_NAMES_LIST;
};