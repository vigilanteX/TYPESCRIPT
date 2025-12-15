function sum(a, b) {
    console.log(a + b);
}
sum(5, 10);
//defaulting params
function printName(name) {
    if (name === void 0) { name = "Guest"; }
    console.log("name is ".concat(name));
}
printName();
printName("Alice");
