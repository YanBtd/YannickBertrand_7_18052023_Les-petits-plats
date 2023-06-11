'use strict';

export function toggleList(listWrapper, searchInput) {

    const getClass = listWrapper.getAttribute("class");
   
    if (getClass == "hide") {
        listWrapper.className = "grid";
        searchInput.className = "show";
        searchInput.focus();
        // listWrapper.classList.add("active-btn");
    } else {
        listWrapper.className = "hide";
        searchInput.className = "hide";
        // listWrapper.classList.remove("active-btn");
    }
};