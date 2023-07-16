'use strict';

import { tagFactory } from "../factories/tagFactory.js";

import { getMultiTags } from "../get/getMultiTags.js";

import { createFilteredIngredientsNamesList } from "../create/createFilteredIngredientsNamesList.js";

import { createFilteredAppliancesNamesList } from "../create/createFilteredAppliancesNamesList.js";

import { createFilteredUstensilsNamesList } from "../create/createFilteredUstensilsNamesList.js";

import { createOneBarTag } from "../create/createOneBarTag.js";

import { displayAllRecipes } from "../display/displayAllRecipes.js";

// Gestion du clic sur un tag

export function handleClickOnTagsList(evt, getRecipesJSON, createOneTag, displayOneTag) {

    // Création du bar tag
    createOneBarTag(evt, createOneTag, displayOneTag);

    // On accède à ".tags-wrapper";
    const tagsWrapper = document.querySelector("#tags-wrapper");
    // console.log(tagsWrapper);

    // On récupère tous ses enfants li
    const tagsWrapperLiNodeList = tagsWrapper.querySelectorAll("li");
    // console.log(tagsWrapperLiNodeList);

    // Tableau de stockage des li tags
    const tagsLiOfAllTypesArr = [];
    console.log("tagsLiOfAllTypesArr vaut:", tagsLiOfAllTypesArr);

    // On ajoute chaque tag li au tableau de stockage des tags li
    for (let i = 0; i < tagsWrapperLiNodeList.length; i++) {
        tagsLiOfAllTypesArr.push(tagsWrapperLiNodeList[i]);
    }
    // console.log("tagsLiOfAllTypesArr vaut:", tagsLiOfAllTypesArr);

    // Tableau de stockage des tag objects
    let allTypesTagObjectsArr = [];

    const allRecipesArr = getRecipesJSON();

    // Pour chaque tag li du tableau
    tagsLiOfAllTypesArr.forEach((tagLi) => {

        // On récupère son nom
        const name = tagLi.id;
        // console.log("name vaut:", name);

        // On récupère sa propriété
        const property = tagLi.dataset.propertyName;
        // console.log("property vaut:", property);

        // On transforme chaque tag li en tag object --> pour getMultiTags()
        const tagObject = tagFactory(name, property)
        // console.log(tagObject);

        // On l'ajoute au tableau d'objects
        allTypesTagObjectsArr.push(tagObject);
        // On vérifie que le tableau est rempli avec tous les tag objects
        // console.log("allTypesTagObjectsArr vaut:", allTypesTagObjectsArr);

        // On grefe un écouteur à chaque tag
        tagLi.addEventListener("click", (evt) => {

            tagLi.style.display = "none";

            // Enlever le li cliqué du tableau allTypesTagObjectsArr
            // Pour cela récupérer son index

            let tagObjectIndex = allTypesTagObjectsArr.indexOf(tagObject);
            console.log("tagObjectIndex vaut:", tagObjectIndex);

            if (tagObjectIndex > -1) {
                console.log("tagObjectIndex vaut:", tagObjectIndex);
                allTypesTagObjectsArr.splice(tagObjectIndex, 1);

                console.log("allTypesTagObjectsArr vaut:", allTypesTagObjectsArr);

                // on vide la liste des recettes pour afficher les nouvelles filtrées
                // const recipesList = document.querySelector(".recipes-list");
                // recipesList.textContent = "";

                getMultiTags(allTypesTagObjectsArr);
            }

            if (allTypesTagObjectsArr.length == 0) {

                const recipesList = document.querySelector(".recipes-list");
                recipesList.textContent = "";
                displayAllRecipes(allRecipesArr);
            }

        });
    });

    // on vide la liste des recettes pour afficher les nouvelles filtrées
    const recipesList = document.querySelector(".recipes-list");
    recipesList.textContent = "";

    // Appel de getMultiTags(): fonction de tri pour récupération des recettes filtrées
    getMultiTags(allTypesTagObjectsArr);

    // Création de la nouvelle liste d'ingédients filtrée
    createFilteredIngredientsNamesList();

    // Création de la nouvelle liste de matériels filtrée
    createFilteredAppliancesNamesList(getRecipesJSON);

    // Création de la nouvelle liste d'ustensiles filtrée
    createFilteredUstensilsNamesList(getRecipesJSON);


    const ingredientsListWrapper = document.querySelector("#ingredients-list");
    const ingredientsItemsNodeList = ingredientsListWrapper.querySelectorAll("li");
    // console.log("ingredientsItemsNodeList vaut:", ingredientsItemsNodeList);

    ingredientsItemsNodeList.forEach(li => {

        li.addEventListener("click", (evt) => {

            console.log("ingredientsListeners dit event vaut:", evt);

            handleClickOnTagsList(evt, getRecipesJSON, createOneTag, displayOneTag);
        });
    });

    const appliancesListWrapper = document.querySelector("#appliances-list");
    const appliancesItemsNodeList = appliancesListWrapper.querySelectorAll("li");
    // console.log("appliancesItemsNodeList vaut:", appliancesItemsNodeList);

    appliancesItemsNodeList.forEach(li => {

        li.addEventListener("click", (evt) => {

            console.log("appliancesListeners dit event vaut:", evt);

            handleClickOnTagsList(evt, getRecipesJSON, createOneTag, displayOneTag);
        });
    });

    const ustensilsListWrapper = document.querySelector("#ustensils-list");
    const ustensilsItemsNodeList = ustensilsListWrapper.querySelectorAll("li");
    // console.log("ustensilsItemsNodeList vaut:", ustensilsItemsNodeList);

    ustensilsItemsNodeList.forEach(li => {

        li.addEventListener("click", (evt) => {

            console.log("ustensilsListeners dit event vaut:", evt);

            handleClickOnTagsList(evt, getRecipesJSON, createOneTag, displayOneTag);
        });
    });

};