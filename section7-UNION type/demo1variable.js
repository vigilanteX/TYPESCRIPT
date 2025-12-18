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
//either number array or string array or boolean array
var stuff = [];
stuff = [1, 2, 3,];
console.log(stuff);
stuff = ["a", "b", "c"];
console.log(stuff);
stuff = [true, false, true];
console.log(stuff);
//stuff2 is an array which can contain number or string or boolean
var stuff2 = [];
stuff2 = [1, "a", true, 2, "b", false];
console.log(stuff2);
var bank = "WPAC";
//below line will give error as value is not in defined literal types
//bank="SBI"
function getBankDetails(b) {
    console.log("Bank selected is " + b);
}
getBankDetails("BOM");
getBankDetails("SGB");
//getBankDetails("SBI") //gives error
