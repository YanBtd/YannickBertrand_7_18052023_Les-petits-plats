'use strict';

// Import de la méthode de gestion d'affichage/masquage de liste
import { toggleList } from "./toggleList.js";

export function listeners() {
    const ingredientsBtn = document.querySelector("#btn-ingredients");
    const ingredientsListWrapper = document.querySelector("#ingredients-list");

    const appareilsBtn = document.querySelector("#btn-appareils");
    const appareilsListWrapper = document.querySelector("#appareils-list");

    const ustensilsBtn = document.querySelector("#btn-ustensils");
    const ustensilsListWrapper = document.querySelector("#ustensils-list");

    ingredientsBtn.addEventListener("click", () => toggleList(ingredientsListWrapper));

    appareilsBtn.addEventListener("click", () => toggleList(appareilsListWrapper));
    
    ustensilsBtn.addEventListener("click", () => toggleList(ustensilsListWrapper));
};