function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
fullName({ firstName: "John", lastName: "Doe" });
var person = { firstName: "Jane", lastName: "Smith" };
console.log(person);
function fullNameMethod(name, age) {
    return { first: name, second: age.toString() };
}
console.log(fullNameMethod("Alice", 30));
