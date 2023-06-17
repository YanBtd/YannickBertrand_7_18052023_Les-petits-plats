'use strict';

import { getUniqueAppliancesNames } from "../get/getUniqueAppliancesNames.js";

export function createAppliancesNamesList(getRecipesJSON) {

    const allUniqueAppliancesOfAllRecipesArr = getUniqueAppliancesNames(getRecipesJSON);

    const APPLIANCES_NAMES_WRAPPER = document.querySelector("#appliances-list");

    for (const oneIteratedApplianceName of allUniqueAppliancesOfAllRecipesArr) {

        const applianceNameLi = document.createElement("li");
        applianceNameLi.className = "appliance-name-li";
        applianceNameLi.id = oneIteratedApplianceName;
        applianceNameLi.dataset.propertyName = "appliance";

        // console.log(applianceNameLi.dataset.propertyName);

        // console.log("appliance:", applianceNameLi);

        // const templateLi = `<span class = "appareil-span-name">${oneIteratedAppareilName}</span>`;
        const templateLi = oneIteratedApplianceName;
        applianceNameLi.innerHTML = templateLi;
        APPLIANCES_NAMES_WRAPPER.appendChild(applianceNameLi);
    }
    return APPLIANCES_NAMES_WRAPPER;
};