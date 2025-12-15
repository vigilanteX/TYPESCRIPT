function sum(a:number, b:number)
{
    console.log(a + b);
}
sum(5, 10);

//defaulting params
function printName(name:string="Guest")
{
    console.log(`name is ${name}`);
}
printName();
printName("Alice");