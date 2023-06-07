'use strict';

export function toggleList(listWrapper) {

    const getClass = listWrapper.getAttribute("class");
   
    if (getClass == "hide") {
        listWrapper.className = "show";
        listWrapper.classList.add("active-btn");
    } else {
        listWrapper.className = "hide";
        listWrapper.classList.remove("active-btn");
    }
};