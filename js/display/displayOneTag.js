'use strict';

export function displayOneTag(tag) {

    const TAGS_LIST = document.querySelector(".tags-wrapper");
    TAGS_LIST.appendChild(tag);
};