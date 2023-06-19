'use strict';

export function createOneTag(tagName, propertyName) {

    console.log(propertyName)

    const TAG_DIV = document.createElement('div');

    if(propertyName == "ingredient") {
        TAG_DIV.style.backgroundColor = "rgb(0, 34, 255)";
    } else if(propertyName == "appliance") {
        TAG_DIV.style.backgroundColor = "green";
    }else {
        TAG_DIV.style.backgroundColor = "rgb(255, 72, 0)";
    }

    TAG_DIV.className = "tag";

    const templateTag = `
        <span class = "tag-name">${tagName}</span>
        <span class = "close-tag">x</span>
    `;
    TAG_DIV.innerHTML = templateTag;
    // TAG_DIV.innerHTML = tagName;

    console.log(TAG_DIV.innerHTML);
    console.log(TAG_DIV.outerHTML);
    // console.log(TAG_DIV);

    return TAG_DIV;
};