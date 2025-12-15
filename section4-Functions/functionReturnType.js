function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
//A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
// function greet(name:string):string
// {
//      `Hello, ${name}!`;
// }
// function meow(what:string):void
// {
// console.log(what);
// }
// meow("cat! ");
//void returns undefined by default
// function greet(name:string):void
// {
//   return undefined;
// }
function greet(name) {
    return;
}
greet("John");
