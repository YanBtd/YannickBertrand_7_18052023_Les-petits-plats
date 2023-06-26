'use strict';

import { getUniqueAppliancesNames } from "../get/getUniqueAppliancesNames.js";

export function createAppliancesNamesList(getRecipesJSON) {

    const allUniqueAppliancesOfAllRecipesArr = getUniqueAppliancesNames(getRecipesJSON);
    // console.log(allUniqueAppliancesOfAllRecipesArr);

    const APPLIANCES_NAMES_LIST = document.querySelector("#appliances-list");

    for (const oneIteratedApplianceName of allUniqueAppliancesOfAllRecipesArr) {

        const applianceNameLi = document.createElement("li");
        applianceNameLi.className = "appliance-name-li";
        applianceNameLi.id = oneIteratedApplianceName;
        applianceNameLi.tabIndex = 0;
        applianceNameLi.dataset.propertyName = "appliance";

        // const templateLi = `<span class = "appareil-span-name">${oneIteratedAppareilName}</span>`;

        const templateLi = oneIteratedApplianceName;
        applianceNameLi.innerHTML = templateLi;
        APPLIANCES_NAMES_LIST.appendChild(applianceNameLi);
    }
    // console.log(APPLIANCES_NAMES_LIST.outerHTML);
    // console.log(APPLIANCES_NAMES_LIST.innerHTML);
    // console.log(APPLIANCES_NAMES_LIST);

    return APPLIANCES_NAMES_LIST;
};