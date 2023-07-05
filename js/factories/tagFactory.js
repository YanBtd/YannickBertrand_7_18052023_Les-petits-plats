'use strict';

export function tagFactory(tagName, propertyName) {

    // console.log("tagFactory() dit tagName vaut:", tagName);
    // console.log("tagFactory() dit propertyName vaut:", propertyName);

    // const object = {
    //     name: tagName,
    //     type: propertyName,
    // };
    // return object;
    return {
        // key: tagName,
        name: tagName,
        type: propertyName,
    }
};