'use strict';

export function getUniqueAppliancesNames(getRecipesJSON) {

    // Stockage de la propriété appliance des recettes
    const allAppliancePropertiesOfAllRecipesArr = [];

    // Stockage des appliances uniques triés
    let allUniqueAppliancesOfAllRecipesArr = [];

    // On ajoute chacune des 50 propriétés appliance insensible à la casse au tableau des propriétés
    getRecipesJSON().forEach(recipe =>
        allAppliancePropertiesOfAllRecipesArr.push(recipe.appliance.toLowerCase())
    );

    // Stockage des 11 appliances uniques après filtrage des doublons
    allUniqueAppliancesOfAllRecipesArr = allAppliancePropertiesOfAllRecipesArr
    .filter((x, i) => allAppliancePropertiesOfAllRecipesArr.indexOf(x) === i)
    .sort((a, b) => a.localeCompare(b, 'fr'));

    // On retourne le tableau des 11 appliances uniques
    // console.log(allAppliancePropertiesOfAllRecipesArr);
    // console.log(allUniqueAppliancesOfAllRecipesArr);
    return allUniqueAppliancesOfAllRecipesArr;
}