function sum(a:number,b:number):number
{
    return a + b;
}
console.log(sum(10,20)); 


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

//Type 'undefined' is not assignable to type 'never'.
// function greet(name:string):never
// {
//     return;
// }
// greet("John");

//void means returns undefined or null but never means it never returns anything