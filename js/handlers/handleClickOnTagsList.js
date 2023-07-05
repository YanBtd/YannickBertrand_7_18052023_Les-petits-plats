'use strict';

import { tagFactory } from "../factories/tagFactory.js";

import { getMultiTags } from "../get/getMultiTags.js";

import { createFilteredIngredientsNamesList } from "../create/createFilteredIngredientsNamesList.js";

// import {createFilteredAppliancesNamesList} from "../create/createFilteredAppliancesNamesList.js";

import { getAppliancesListOfAllFilteredRecipes } from "../get/getAppliancesListOfAllFilteredRecipes.js";

// Gestion du clic sur un tag

export function handleClickOnTagsList(evt, getRecipesJSON, searchRecipeByTagNameAndPropertyName,
    displayAllRecipes, createOneTag, displayOneTag) {

    // on vide la liste des recettes pour afficher les nouvelles filtrées
    const recipesList = document.querySelector(".recipes-list");
    recipesList.textContent = "";

    // Récupération du nom du lien
    const tagName = evt.target.id;
    // console.log("tagName vaut:", evt.target.id);

    // Récupération de la valeur de son attribut data-property-name
    const propertyName = evt.target.getAttribute("data-property-name");
    // console.log("propertyName vaut:", propertyName);

    // On affiche dans ".tags-wrapper" le li tag après création via createOneTag()
    displayOneTag(createOneTag(tagName, propertyName));

    // On accède à ".tags-wrapper";
    const tagsWrapper = document.querySelector("#tags-wrapper");
    // console.log(tagsWrapper);

    // On récupère tous ses enfants li
    const tagsWrapperLiNodeList = tagsWrapper.querySelectorAll("li");
    // console.log(tagsWrapperLiNodeList);

    // Tableau de stockage des li tags
    const tagsLiOfAllTypesArr = [];

    for (let i = 0; i < tagsWrapperLiNodeList.length; i++) {
        tagsLiOfAllTypesArr.push(tagsWrapperLiNodeList[i]);
    }
    console.log("tagsLiOfAllTypesArr vaut:", tagsLiOfAllTypesArr);

    // Tableau de stockage des tag objects
    let allTypesTagObjectsArr = [];

    // Pour chaque li du tableau
    tagsLiOfAllTypesArr.forEach((li) => {

        // On récupère son nom
        const name = li.id;
        // console.log("name vaut:", name);

        // On récupère sa propriété
        const property = li.dataset.propertyName;
        // console.log("property vaut:", property);

        // On transforme chaque tag li en tag object
        const tagObject = tagFactory(name, property)
        // console.log(tagObject);

        // On l'ajoute au tableau d'objects
        allTypesTagObjectsArr.push(tagObject);
        console.log("allTypesTagObjectsArr vaut:", allTypesTagObjectsArr);

        li.addEventListener("click", (evt) => {

            li.style.display = "none";

            // createFilteredIngredientsNamesList();

            // getMultiTags(allTypesTagObjectsArr);


            // Enlever le li cliqué du tableau allTypesTagObjectsArr
            // Pour cela récupérer son index

            let tagObjectIndex = allTypesTagObjectsArr.indexOf(tagObject);
            console.log(tagObjectIndex);

            if (tagObjectIndex > -1) {
                console.log("tagObjectIndex vaut:", tagObjectIndex);
                allTypesTagObjectsArr.splice(tagObjectIndex, 1);

                console.log("allTypesTagObjectsArr vaut:", allTypesTagObjectsArr);

                // getMultiTags(allTypesTagObjectsArr);
            }

        });
    });
    // On vérifie que le tableau est rempli avec tous les tag objects
    // console.log("allTypesTagObjectsArr vaut:", allTypesTagObjectsArr);

    // Appel de getMultiTags(): fonction de tri pour récupération des recettes filtrées
    getMultiTags(allTypesTagObjectsArr);

    // Création de la nouvelle liste d'ingédients filtrée
    createFilteredIngredientsNamesList();

    // Création de la nouvelle liste de matériels filtrée
    // createFilteredAppliancesNamesList();

    const json = getRecipesJSON();
        console.log(json);

    // getAppliancesListOfAllFilteredRecipes(json);


    const ingredientsListWrapper = document.querySelector("#ingredients-list");

    // const appliancesListWrapper = document.querySelector("#appliances-list");

    // const ustensilsListWrapper = document.querySelector("#ustensils-list");

    const ingredientsItemsNodeList = ingredientsListWrapper.querySelectorAll("li");
    // console.log("ingredientsItemsNodeList vaut:", ingredientsItemsNodeList);

    // const appliancesItemsNodeList = appliancesListWrapper.querySelectorAll("li");
    // console.log("appliancesItemsNodeList vaut:", appliancesItemsNodeList);

    // const ustensilsItemsNodeList = ustensilsListWrapper.querySelectorAll("li");
    // console.log("ustensilsItemsNodeList vaut:", ustensilsItemsNodeList);

    ingredientsItemsNodeList.forEach(li => {
        li.addEventListener("click", (evt) => {

            console.log("handleClickOnTagsList dit event vaut:", evt);
            // Ne fonctionne pas sur les tags bar
            // li.style.display = "none"; 
            handleClickOnTagsList(evt, getRecipesJSON, searchRecipeByTagNameAndPropertyName,
                displayAllRecipes, createOneTag, displayOneTag);
        });
    });

    // appliancesItemsNodeList.forEach(li => {
    //     li.addEventListener("click", (evt) => {

    //         console.log("handleClickOnTagsList dit event vaut:", evt);
    //         // Ne fonctionne pas sur les tags bar
    //         // li.style.display = "none"; 
    //         handleClickOnTagsList(evt, getRecipesJSON, searchRecipeByTagNameAndPropertyName,
    //             displayAllRecipes, createOneTag, displayOneTag);
    //     });
    // });

    // ustensilsItemsNodeList.forEach(li => {
    //     li.addEventListener("click", (evt) => {

    //         console.log("handleClickOnTagsList dit event vaut:", evt);
    //         // Ne fonctionne pas sur les tags bar
    //         // li.style.display = "none"; 
    //         handleClickOnTagsList(evt, getRecipesJSON, searchRecipeByTagNameAndPropertyName,
    //             displayAllRecipes, createOneTag, displayOneTag);
    //     });
    // });

};