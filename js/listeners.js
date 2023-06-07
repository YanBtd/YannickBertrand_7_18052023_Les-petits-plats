'use strict';

// Import de la méthode de gestion d'affichage/masquage de liste
import { toggleList } from "./toggleList.js";

// Import de la méthode de création des noms des ingrédients de toutes les recettes
import { createIngredientsNamesList } from "./createIngredientsNamesList.js";

export function listeners() {
    const ingredientsBtn = document.querySelector("#btn-ingredients");
    const ingredientsListWrapper = document.querySelector("#ingredients-list");
    ingredientsListWrapper.innerHTML = createIngredientsNamesList().innerHTML;

    const appareilsBtn = document.querySelector("#btn-appareils");
    const appareilsListWrapper = document.querySelector("#appareils-list");

    const ustensilsBtn = document.querySelector("#btn-ustensils");
    const ustensilsListWrapper = document.querySelector("#ustensils-list");

    ingredientsBtn.addEventListener("click", () => toggleList(ingredientsListWrapper));
    ingredientsBtn.addEventListener("blur", () => ingredientsListWrapper.className = "hide");

    appareilsBtn.addEventListener("click", () => toggleList(appareilsListWrapper));

    ustensilsBtn.addEventListener("click", () => toggleList(ustensilsListWrapper));
};


