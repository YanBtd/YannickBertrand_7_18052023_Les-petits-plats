'use strict';

// Import de la fonction de création des noms des ingrédients de toutes les recettes
import { createIngredientsNamesList } from "../create/createIngredientsNamesList.js";

// Import de la fonction de création des noms des appareils de toutes les recettes
import { createAppliancesNamesList } from "../create/createAppliancesNamesList.js";

// Import de la fonction de création des noms des ustensiles de toutes les recettes
import { createUstensilsNamesList } from "../create/createUstensilsNamesList.js";

// Import de la fonction de gestion d'affichage/masquage de liste
import { handleListToggle } from "../handlers/handleListToggle.js";

// Import de la fonction de gestion du tag passé à l'input
import { handleInput } from "../handlers/handleInput.js";

// Import de la fonction de gestion du clic sur un tag
import { handleClickOnTag } from "../handlers/handleClickOnTag.js";

// Import des listeners du tag Ingédients
import { ingredientsListeners } from "./ingredientsListeners.js";

// Import des listeners du tag Appareils
import { appliancesListeners } from "./appliancesListeners.js";

// Import des listeners du tag Ustensiles
import { ustensilsListeners } from "./ustensilsListeners.js";

// // Import de la fonction de recherche de recette filtrée par catégorie
// import { searchRecipeByPropertyName } from "../search/searchRecipeByPropertyName.js";

// // Import de la méthode d'affichage des recettes
// import { displayAllRecipes } from "../display/displayAllRecipes.js";


export function globalListeners(getRecipesJSON) {

    ingredientsListeners(createIngredientsNamesList, getRecipesJSON, handleClickOnTag, handleListToggle, handleInput);

    appliancesListeners(createAppliancesNamesList, getRecipesJSON, handleClickOnTag, handleListToggle, handleInput);

    ustensilsListeners(createUstensilsNamesList, getRecipesJSON, handleClickOnTag, handleListToggle, handleInput);
};