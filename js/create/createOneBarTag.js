'use strict';

export function createOneBarTag(evt, createOneTag, displayOneTag) {

    // Récupération du nom du lien
    const tagName = evt.target.id;
    // console.log("tagName vaut:", evt.target.id);

    // Récupération de la valeur de son attribut data-property-name
    const propertyName = evt.target.getAttribute("data-property-name");
    // console.log("propertyName vaut:", propertyName);

    // On affiche dans ".tags-wrapper" le li tag après création via createOneTag()
    displayOneTag(createOneTag(tagName, propertyName));
};