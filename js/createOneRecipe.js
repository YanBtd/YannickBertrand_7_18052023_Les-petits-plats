'use strict';

export function createOneRecipe(recipe) {

    const propertyIngredient_s_OfEachObjectRecipe = recipe.ingredients;
    const RECIPE_INGREDIENTS_WRAPPER = document.createElement("ul");
    RECIPE_INGREDIENTS_WRAPPER.className = "recipe-ingredients-wrapper";

    for (const oneIteratedObjectIngredient of propertyIngredient_s_OfEachObjectRecipe) {

        const recipeIngredientItem = document.createElement("li");

        recipeIngredientItem.className = "recipe-ingredient-li";

        recipeIngredientItem.innerHTML = `${oneIteratedObjectIngredient.ingredient}`;

        RECIPE_INGREDIENTS_WRAPPER.appendChild(recipeIngredientItem);
    };

    const ITEM_RECIPE = document.createElement('li');

    ITEM_RECIPE.className = "recipe-item";

    const templateRecipe = `
        <div class="recipe-image">
            <span>recipe-image</span>
        </div>
        <div class="recipe-body">
            <div class="recipe-body-top">
                <span class="recipe-name-wrapper">${recipe.name}</span>
                <div class="recipe-time-wrapper">
                    <img src="./assets/images/time.svg" alt="search icon">
                    <span class="recipe-time">${recipe.time}</span>
                    <span>min</span>
                </div>
            </div>
            <div class="recipe-body-bottom">
                ${RECIPE_INGREDIENTS_WRAPPER.outerHTML}
                <p class="recipe-description-wrapper">${recipe.description}
            </div>
        </div>
    `;
    ITEM_RECIPE.innerHTML = templateRecipe;
    return ITEM_RECIPE;
}