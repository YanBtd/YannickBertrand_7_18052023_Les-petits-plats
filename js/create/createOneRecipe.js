'use strict';

export function createOneRecipe(recipe) {

    const propertyIngredient_s_OfEachObjectRecipe = recipe.ingredients;

    const RECIPE_INGREDIENTS_WRAPPER = document.createElement("ul");
    RECIPE_INGREDIENTS_WRAPPER.className = "recipe-ingredients-wrapper";

    for (const oneIteratedObjectIngredient of propertyIngredient_s_OfEachObjectRecipe) {

        const recipeIngredientItem = document.createElement("li");

        recipeIngredientItem.className = "recipe-ingredient-li";

        if(oneIteratedObjectIngredient.hasOwnProperty('quantity') && 
        oneIteratedObjectIngredient.hasOwnProperty('unit')) {
            const templateLi = `
            <span class = "recipe-ingredient-span-ingredient">${oneIteratedObjectIngredient.ingredient}</span>
            <span class = "recipe-ingredient-span-quantity">${oneIteratedObjectIngredient.quantity}</span>
            <span class = "recipe-ingredient-span-unit">${oneIteratedObjectIngredient.unit}</span>
        `;
        recipeIngredientItem.innerHTML = templateLi;
        }
        if(oneIteratedObjectIngredient.hasOwnProperty('quantity') && 
        !oneIteratedObjectIngredient.hasOwnProperty('unit')) {
            const templateLi = `
            <span class = "recipe-ingredient-span-ingredient">${oneIteratedObjectIngredient.ingredient}</span>
            <span class = "recipe-ingredient-span-quantity">${oneIteratedObjectIngredient.quantity}</span>
        `;
        recipeIngredientItem.innerHTML = templateLi;
        }
        if(!oneIteratedObjectIngredient.hasOwnProperty('quantity') && 
        !oneIteratedObjectIngredient.hasOwnProperty('unit')) {
            const templateLi = `
            <span class = "recipe-ingredient-span-ingredient">${oneIteratedObjectIngredient.ingredient}</span>
        `;
        recipeIngredientItem.innerHTML = templateLi;
        }

        RECIPE_INGREDIENTS_WRAPPER.appendChild(recipeIngredientItem);
    };

    const ITEM_RECIPE_LI = document.createElement('li');

    ITEM_RECIPE_LI.className = "recipe-item";

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
                <p class="text-ellipsis--2 recipe-description-wrapper">${recipe.description}
            </div>
        </div>
    `;

    ITEM_RECIPE_LI.innerHTML = templateRecipe;
    return ITEM_RECIPE_LI;
}