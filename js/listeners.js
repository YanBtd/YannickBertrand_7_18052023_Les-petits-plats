'use strict';

// Import de la méthode de gestion d'affichage/masquage de liste
import { toggleList } from "./toggleList.js";

// Import de la méthode de création des noms des ingrédients de toutes les recettes
import { createIngredientsNamesList } from "./createIngredientsNamesList.js";

// Import de la méthode de création des noms des appareils de toutes les recettes
import { createAppareilsNamesList } from "./createAppareilsNamesList.js";

// Import de la méthode de création des noms des ustensils de toutes les recettes
import { createUstensilsNamesList } from "./createUstensilsNamesList.js";

// Import de la liste des ingredients uniques
// import { getUniqueIngredientsNames } from "./getUniqueIngredientsNames.js";

// const allUniqueIngredientsOfAllRecipesArr = getUniqueIngredientsNames();

// console.log(allUniqueIngredientsOfAllRecipesArr);



export function listeners() {

    // Ingredients

    const ingredientsBtn = document.querySelector("#ingredients-btn-wrapper");
    const ingredientsListWrapper = document.querySelector("#ingredients-list");
    const ingredientsSearchInput = document.querySelector("#ingredients-search-input");
    ingredientsListWrapper.innerHTML = createIngredientsNamesList().innerHTML;

    // console.log(ingredientsListWrapper)

    ingredientsBtn.addEventListener("click", (evt) => {
        evt.preventDefault();
        toggleList(ingredientsListWrapper, ingredientsSearchInput);
    });


    const ingredientsList = document.querySelector("#ingredients-list");
    // console.log(ingredientsList);

    const ingredientItems = ingredientsList.querySelectorAll("li");
    // console.log(ingredientItems);

    ingredientItems.forEach( li => {
        li.addEventListener("click", handleClick)
    })

    function handleClick(evt) {
        console.log("LI vaut:", evt.target.id);
    }


    // --

    // Appareils

    const appareilsBtn = document.querySelector("#appareils-btn-wrapper");
    const appareilsListWrapper = document.querySelector("#appareils-list");
    const appareilsSearchInput = document.querySelector("#appareils-search-input");
    appareilsListWrapper.innerHTML = createAppareilsNamesList().innerHTML;

    // console.log(appareilsSearchInput)

    appareilsBtn.addEventListener("click", (evt) => {
        evt.preventDefault();
        toggleList(appareilsListWrapper, appareilsSearchInput);
    });

    // --

    // Ustensiles

    const ustensilesBtn = document.querySelector("#ustensiles-btn-wrapper");
    const ustensilesListWrapper = document.querySelector("#ustensils-list");
    const ustensilesSearchInput = document.querySelector("#ustensiles-search-input");
    ustensilesListWrapper.innerHTML = createUstensilsNamesList().innerHTML;

    // console.log(ustensilesSearchInput)

    ustensilesBtn.addEventListener("click", (evt) => {
        evt.preventDefault();
        toggleList(ustensilesListWrapper, ustensilesSearchInput);
    });

    // --

    // ingredientsBtn.addEventListener("blur", (evt) => {
    //     evt.preventDefault();
    //     ingredientsListWrapper.className = "hide";
    //     ingredientsSearchInput.className = "hide";
    // });
    
};


