'use strict';

export function handleListToggle(listWrapper, searchInput) {

    const initialClass = listWrapper.getAttribute("class");
    // console.log("initialClass vaut:", initialClass);

    if (initialClass == "hide") {
        listWrapper.className = "grid";
        // console.log("newClass vaut:", listWrapper.getAttribute("class"));
        searchInput.className = "show";
        searchInput.focus();
        // listWrapper.classList.add("active-btn");
    } else {
        listWrapper.className = "hide";
        // console.log("newClass vaut:", listWrapper.getAttribute("class"));
        searchInput.className = "hide";
        // listWrapper.classList.remove("active-btn");
    }
};