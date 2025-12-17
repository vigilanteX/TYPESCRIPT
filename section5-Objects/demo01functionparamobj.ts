function fullName(person:{ firstName: string,lastName: string }) :void{
    console.log(`${person.firstName} ${person.lastName}`);
}

fullName({ firstName: "John", lastName: "Doe" });
//below is not allowed as age is not defined in function parameter type
//and ts does not allow extra properties in inline object
// fullName({ firstName: "John", lastName: "Doe" ,age:25});

//below is allowed as object1 is defined separately and passed to function
const object1 = { firstName: "John", lastName: "Doe" ,age:25};
fullName(object1);

let person:{ firstName: string, lastName: string } = {firstName: "Jane", lastName: "Smith"};
console.log(person)


//function return type object
function fullNameMethod(name:string,age:number):{first:string,second:string}
{
    return {first:name,second:age.toString()};

}
console.log(fullNameMethod("Alice",30));