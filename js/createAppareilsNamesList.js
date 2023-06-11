'use strict';

import { getUniqueAppareilsNames } from "./getUniqueAppareilsNames.js";

export function createAppareilsNamesList() {

    const allUniqueAppliancesOfAllRecipesArr = getUniqueAppareilsNames();

    const APPAREILS_NAMES_WRAPPER = document.querySelector("#appareils-list");

    for (const oneIteratedApplianceName of allUniqueAppliancesOfAllRecipesArr) {

        const appareilNameItem = document.createElement("li");
        appareilNameItem.className = "appareil-name-li";
        appareilNameItem.id = oneIteratedApplianceName;
        appareilNameItem.value = oneIteratedApplianceName;

        // console.log(appareilNameItem.id)
        // console.log(appareilNameItem.value)

        // const templateLi = `<span class = "appareil-span-name">${oneIteratedAppareilName}</span>`;
        const templateLi = oneIteratedApplianceName;
        appareilNameItem.innerHTML = templateLi;
        APPAREILS_NAMES_WRAPPER.appendChild(appareilNameItem);
    }
    return APPAREILS_NAMES_WRAPPER;
};