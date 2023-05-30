'use strict';
// console.log("Hello World !");

// Import du fichier JSON des recettes
import { getRecipesJSON } from "./getRecipesJSON.js";

// Import de la méthode d'affichage des recipes
import { displayAllRecipes } from "./displayAllRecipes.js";

// Import de la méthode de tri
import { searchForAllParameters } from "./searchForAllParameters.js";

// Récupération des données
const recipesJsonArr = getRecipesJSON();

// Appel de displayAllRecipes()
displayAllRecipes(recipesJsonArr);

// Appel de searchForAllParameters()
searchForAllParameters(getRecipesJSON);
