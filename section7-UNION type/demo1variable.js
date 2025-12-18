var age = 18;
age = "eighteen";
function printCoordinates(pt) {
    console.log(pt);
}
var p = { x: 10, y: 20 };
printCoordinates(p);
var c = { lat: 40, long: 50 };
printCoordinates(c);
function addAge(age) {
    if (typeof age === "number") {
        return age + 5;
    }
    return age + " is age";
}
console.log(addAge(25));
console.log(addAge("25"));
