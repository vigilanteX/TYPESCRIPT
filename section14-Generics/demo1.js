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
//from below we didn't specify type<T> but it infered from input arrAY
const infer = getRamdomElement([1, 2, 3, 4, 5, 6]);
function getRandElements(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
console.log(getRandElements({ name: "Aman" }, { age: 1000 }));
