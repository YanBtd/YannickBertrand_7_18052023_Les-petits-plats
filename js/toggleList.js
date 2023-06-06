'use strict';

export function toggleList(listWrapper) {
    // On vide la liste pour afficher notre recherche
    // listWrapper.textContent = "";

    const getClass = listWrapper.getAttribute("class");
   
    if (getClass == "hide") {
        listWrapper.className = "show";
        listWrapper.classList.add("active-btn");
        // à l'ouverture, on peuple la liste suivant le paramètre de recherche
    } else {
        listWrapper.className = "hide";
        listWrapper.classList.remove("active-btn");
    }
};