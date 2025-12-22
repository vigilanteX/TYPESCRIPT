"use strict";
const nums = [1, 2, 3, 4, 5];
const nums2 = [7, 8, 9, 0];
//console.log(nums,nums2)
function identity(item) {
    return item;
}
const i = identity("aman");
console.log(i);
function getRamdomElement(element) {
    const x = Math.floor(Math.random() * (element.length - 1));
    console.log(x);
    return element[x];
}
const j = getRamdomElement(['a', 'b', 'c', 'd']);
console.log(j);
