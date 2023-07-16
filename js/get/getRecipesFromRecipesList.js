'use strict';

export function getRecipesFromRecipesList() {

    // On accède à ".recipes-list"
    const FILTERED_RECIPES_LIST = document.querySelector(".recipes-list");

    // console.log(FILTERED_RECIPES_LIST);

    // On récupère tous ses enfants li = chaque recipe
    const filteredRecipesLiNodeList = FILTERED_RECIPES_LIST.querySelectorAll("li.recipe-item");
    // console.log(filteredRecipesLiNodeList);

    // Tableau de stockage des recipes
    const filteredRecipesLiArr = [];

    // On ajoute la recipe au tableau des recipes
    for (let i = 0; i < filteredRecipesLiNodeList.length; i++) {
        filteredRecipesLiArr.push(filteredRecipesLiNodeList[i]);
    }
    // console.log(filteredRecipesLiArr);

    return filteredRecipesLiArr;
};