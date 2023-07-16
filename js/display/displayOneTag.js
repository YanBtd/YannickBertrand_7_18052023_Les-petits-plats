'use strict';

export function displayOneTag(tag) {

    const TAGS_LIST = document.querySelector("#tags-wrapper");
    // console.log(TAGS_LIST);

    // TAGS_LIST.appendChild(tag);

    if(tag != null) {
        TAGS_LIST.appendChild(tag);
    } else {
        return;
    }
    
};