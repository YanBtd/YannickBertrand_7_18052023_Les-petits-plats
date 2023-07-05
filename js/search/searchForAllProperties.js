'use strict';

export function searchForAllProperties(getRecipesJSON, displayAllRecipes) {

    const searchInput = document.querySelector("#search-input");
    searchInput.focus();
    searchInput.addEventListener("input", filterData);

    function filterData(e) {
        // On lance la recherche à partir de 3 caractères tapés dans la barre de recherches
        if (e.target.value.length > 2) {

            // on vide la liste des recettes
            const recipesList = document.querySelector(".recipes-list");
            recipesList.textContent = "";

            const searchedString = e.target.value.toLowerCase();

            // Algo 1 with filter

            const filteredArr = getRecipesJSON().filter(
                recipeData => recipeData.name.toLowerCase().includes(searchedString)
                || recipeData.description.toLowerCase().includes(searchedString)
                || recipeData.ingredients.some(el => el.ingredient.toLowerCase().includes(searchedString))
                || recipeData.appliance.toLowerCase().includes(searchedString)
                || recipeData.ustensils.some(el => el.toLowerCase().includes(searchedString)))
            ;

            // Algo 2 with for loop

            // const recipes = getRecipesJSON();
            // const filteredArr = [];

            // for (let i = 0; i < recipes.length; i++) {
            //     if (
            //         recipes[i].name.toLowerCase().includes(searchedString)
            //         || recipes[i].description.toLowerCase().includes(searchedString)
            //         || recipes[i].ingredients.some(el => el.ingredient.toLowerCase().includes(searchedString))
            //         || recipes[i].appliance.toLowerCase().includes(searchedString)
            //         || recipes[i].ustensils.some(el => el.toLowerCase().includes(searchedString))
            //     ) {
            //         filteredArr.push(recipes[i]);
            //     }
            // };

            // Si correspondance trouvée on affiche les recettes sinon message d'erreur
            if (filteredArr.length > 0) {
                recipesList.style.display = "grid";
                displayAllRecipes(filteredArr);
            } else {
                recipesList.style.display = "block";
                recipesList.innerHTML = `
                <h2> Aucune recette ne correspond à votre critère... 
                Vous pouvez chercher « tarte aux pommes », « poisson », etc...</h2>
                `
            }

        } else
            // Si la barre de recherche est vidée, on réaffiche l'ensemble des recettes
            if (e.target.value.length == 0) {
                displayAllRecipes(getRecipesJSON());
            }
    }
};