'use strict';

export function createOneTag(tagName, propertyName) {

    const TAG_LI = document.createElement('li');
    TAG_LI.className = "tag-li";
    TAG_LI.setAttribute("id", tagName);
    TAG_LI.setAttribute("data-property-name", propertyName);

    if(propertyName == "ingredient") {
        TAG_LI.style.backgroundColor = "rgb(0, 34, 255)";
    } else if(propertyName == "appliance") {
        TAG_LI.style.backgroundColor = "green";
    }else {
        TAG_LI.style.backgroundColor = "rgb(255, 72, 0)";
    }

    const templateTag = `
        <span id="${tagName}" class="tag-span" data-property-name="${propertyName}">${tagName}</span>
        <span class="close-tag" aria-hidden="true">x</span>
    `;
    TAG_LI.innerHTML = templateTag;

    // console.log(TAG_LI.innerHTML);
    // console.log(TAG_LI.outerHTML);
    // console.log(TAG_LI);

    return TAG_LI;
};