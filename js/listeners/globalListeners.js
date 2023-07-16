'use strict';

// Import de la fonction de gestion d'affichage/masquage de liste
import { handleListToggle } from "../handlers/handleListToggle.js";

// Import de la fonction de gestion du tag passé à l'input
import { handleInput } from "../handlers/handleInput.js";

// Import de la fonction de gestion du clic sur un tag
import { handleClickOnTagsList } from "../handlers/handleClickOnTagsList.js";

// Import des listeners du tag Ingédients
import { ingredientsListeners } from "./ingredientsListeners.js";

// Import des listeners du tag Appareils
import { appliancesListeners } from "./appliancesListeners.js";

// Import des listeners du tag Ustensiles
import { ustensilsListeners } from "./ustensilsListeners.js";

// Import de la fonction de recherche de recette filtrée par catégorie et nom de tag
import { searchRecipeByTagNameAndPropertyName } from "../search/searchRecipeByTagNameAndPropertyName.js";

// Import de la fonction d'affichage de la totalité des recettes
import { displayAllRecipes } from "../display/displayAllRecipes.js";

// Import de la fonction de création du tag
import { createOneTag } from "../create/createOneTag.js";

// Import de la fonction d'affichage du tag
import { displayOneTag } from "../display/displayOneTag.js";

// Import de la fonction de filtrage des items par nom de tag
import { searchItemsByTagName } from "../search/searchItemsByTagName.js";


export function globalListeners(getRecipesJSON) {

    // TODO simplify parameters list for all the functions below
        // TODO it should be `ingredientsListeners()`

    ingredientsListeners(getRecipesJSON, handleClickOnTagsList,
        handleListToggle, handleInput, displayAllRecipes, searchRecipeByTagNameAndPropertyName,
        createOneTag, displayOneTag, searchItemsByTagName
    );

    appliancesListeners(getRecipesJSON, handleClickOnTagsList,
        handleListToggle, handleInput, displayAllRecipes, searchRecipeByTagNameAndPropertyName,
        createOneTag, displayOneTag, searchItemsByTagName
    );

    ustensilsListeners(getRecipesJSON, handleClickOnTagsList,
        handleListToggle, handleInput, displayAllRecipes, searchRecipeByTagNameAndPropertyName,
        createOneTag, displayOneTag, searchItemsByTagName
    );
};