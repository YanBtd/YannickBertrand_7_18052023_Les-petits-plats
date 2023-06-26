'use strict';

// Import du fichier JSON des recettes
import { getRecipesJSON } from "./get/getRecipesJSON.js";

// Import de la méthode d'affichage des recettes
import { displayAllRecipes } from "./display/displayAllRecipes.js";

// Import de la méthode de tri global tous paramètres
import { searchForAllProperties } from "./search/searchForAllProperties.js";

// Import des écouteurs
import { globalListeners } from "./listeners/globalListeners.js";

// Récupération du tableau JSON des recettes
const recipesJsonArr = getRecipesJSON();

// Appel de displayAllRecipes() pour affichage des recettes
displayAllRecipes(recipesJsonArr);

// Appel de searchForAllProperties() pour activation du tri global
searchForAllProperties(getRecipesJSON, displayAllRecipes);

// Appel de listeners() pour gestion des dropdowns
globalListeners(getRecipesJSON);