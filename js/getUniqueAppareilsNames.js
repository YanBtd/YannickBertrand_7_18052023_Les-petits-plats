'use strict';

import { getRecipesJSON } from "./getRecipesJSON.js";

export function getUniqueAppareilsNames() {

    // Stockage des propriétés appliance des recettes
    const allAppliancePropertiesOfAllRecipesArr = [];

    // Stockage des appareils uniques triés
    let allUniqueAppliancesOfAllRecipesArr = [];

    // On ajoute chaque propriété appliance insensible à la casse au tableau des 50 appliances
    getRecipesJSON().forEach(recipe =>
        allAppliancePropertiesOfAllRecipesArr.push(recipe.appliance.toLowerCase())
    )

    // Stockage des 11 appliances uniques après filtrage des doublons
    allUniqueAppliancesOfAllRecipesArr = allAppliancePropertiesOfAllRecipesArr
        .filter((x, i) => allAppliancePropertiesOfAllRecipesArr.indexOf(x) === i);
    // .sort((a, b) => a.localeCompare(b, 'fr'));

    // On retourne le tableau des appliances uniques
    // console.log(allAppliancePropertiesOfAllRecipesArr);
    // console.log(allUniqueAppliancesOfAllRecipesArr);
    return allUniqueAppliancesOfAllRecipesArr;
}