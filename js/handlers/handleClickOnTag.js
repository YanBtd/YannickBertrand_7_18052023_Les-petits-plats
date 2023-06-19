'use strict';

import { searchRecipeByPropertyName } from "../search/searchRecipeByPropertyName.js";

import { displayAllRecipes } from "../display/displayAllRecipes.js";

import { createOneTag } from "../create/createOneTag.js";

import { displayOneTag } from "../display/displayOneTag.js"

// Gestion du clic sur un tag

export function handleClickOnTag(evt, getRecipesJSON) {

    // Récupération du nom du lien
    const tagName = evt.target.id;
    console.log("tagName vaut:", evt.target.id);

    // Récupération de la valeur de son attribut data-tag-name
    const propertyName = evt.target.getAttribute("data-property-name");
    console.log("propertyName vaut:", propertyName);

    // Appel de la fonction de tri et récupération des recettes filtrées
    const filteredArr = searchRecipeByPropertyName(tagName, propertyName, getRecipesJSON);

    // on vide la liste des recettes pour affichées les nouvelles filtrées
    const recipesList = document.querySelector(".recipes-list");
    recipesList.textContent = "";

    // Affichage des recettes filtrées
    displayAllRecipes(filteredArr)

    displayOneTag(createOneTag(tagName, propertyName));
};