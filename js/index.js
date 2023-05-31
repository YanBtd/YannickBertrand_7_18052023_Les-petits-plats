'use strict';

// Import du fichier JSON des recettes
import { getRecipesJSON } from "./getRecipesJSON.js";

// Import de la méthode d'affichage des recettes
import { displayAllRecipes } from "./displayAllRecipes.js";

// Import de la méthode de tri global tous paramètres
import { searchForAllParameters } from "./searchForAllParameters.js";

// Récupération du tableau JSON des recettes
const recipesJsonArr = getRecipesJSON();

// Appel de displayAllRecipes() pour affichage des recettes
displayAllRecipes(recipesJsonArr);

// Appel de searchForAllParameters() pour activation du tri global
searchForAllParameters(getRecipesJSON);