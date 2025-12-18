var arr = [42, "Hello", true];
console.log(arr);
var arr2 = [7, "TypeScript", false];
console.log(arr2);
arr2[0] = 100;
console.log(arr2);
//arr[0]="200"; // Error: Type 'string' is not assignable to type 'number' at index 0
//after assigning still we can push other types
arr2.push("new element");
console.log(arr2);
//arr2=[]; // Error: Type '[]' is not assignable to type '[number, string, boolean]'
var tup = [];
tup.push([1, "one", true]);
tup.push([2, "two", false]);
//tup.push([3,"three"]); // Error: Source has 2 element(s) but target requires 3.
console.log(tup);
