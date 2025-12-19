interface Person {
    name: string;
    age: number;
    greet:()=>string;
    meet():string;
}

const user: Person = {
    name: "Alice",
    age: 30,
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
    meet: function() {
        return `Nice to meet you! I'm ${this.name}.`;
    }
}

console.log(user.greet());
console.log(user.meet());

interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}
const simpleCalculator: Calculator = {
    add:function(a: number, b: number): number {
        return a + b;
    },
    subtract:function(a: number, b: number): number {
        return a - b;
    }
}
let add=simpleCalculator.add(5, 3); // 8
let sub=simpleCalculator.subtract(10, 4); // 6
console.log(`Addition: ${add}`);
console.log(`Subtraction: ${sub}`);

interface Multiplier {
    a:number,
    b:number,
    multiply(x: number, y: number): number;
}
const multiplier: Multiplier = {
    a: 4,
    b: 5,
    multiply: function(x: number, y: number): number {
        return x * y*this.a*this.b;
    }
}
let product=multiplier.multiply(2, 3); // 120
console.log(`Product: ${product}`);
