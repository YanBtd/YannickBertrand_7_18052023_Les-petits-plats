'use strict';

export function appliancesListeners(createAppliancesNamesList, getRecipesJSON, handleClick, toggleList, handleInput) {

    // Appliances

    const appliancesBtn = document.querySelector("#appliances-btn-wrapper");
    const appliancesListWrapper = document.querySelector("#appliances-list");
    const appliancesSearchInput = document.querySelector("#appliances-search-input");
    const appliancesForm = document.querySelector("#appliances-form");
    appliancesListWrapper.innerHTML = createAppliancesNamesList(getRecipesJSON).innerHTML;

    appliancesForm.addEventListener("submit", function (event) {
        event.preventDefault();
        appliancesListWrapper.className = "hide";
        appliancesSearchInput.className = "hide";
        appliancesSearchInput.value = "";
    });

    // console.log(appliancesSearchInput);

    appliancesBtn.addEventListener("click", () => {
        toggleList(appliancesListWrapper, appliancesSearchInput);
    });

    const appliancepropertyName = "appliance";
    appliancesSearchInput.addEventListener("input", (evt) => handleInput(evt, appliancepropertyName, getRecipesJSON));

    const appliancesItems = appliancesListWrapper.querySelectorAll("li");

    appliancesItems.forEach(li => {
        li.addEventListener("click", (evt) => handleClick(evt, getRecipesJSON));
    })
};