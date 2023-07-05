'use strict';

export function searchItemsByTagName(tagNameValue, ingredientsItemsArr, appliancesItemsArr, ustensilsItemsArr) {

    let filteredItemsByTagNameArr = [];

    if (ingredientsItemsArr.length > 0) {
        filteredItemsByTagNameArr = ingredientsItemsArr.filter(
            item => item.toLowerCase().includes(tagNameValue)
        );
    } else if (appliancesItemsArr.length > 0) {
        filteredItemsByTagNameArr = appliancesItemsArr.filter(
            item => item.toLowerCase().includes(tagNameValue)
        );
    } else {
        filteredItemsByTagNameArr = ustensilsItemsArr.filter(
            item => item.toLowerCase().includes(tagNameValue)
        );
    }
    console.log(filteredItemsByTagNameArr);
    return filteredItemsByTagNameArr;
};