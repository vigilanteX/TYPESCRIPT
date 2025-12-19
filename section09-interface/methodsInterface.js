var user = {
    name: "Alice",
    age: 30,
    greet: function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    },
    meet: function () {
        return "Nice to meet you! I'm ".concat(this.name, ".");
    }
};
console.log(user.greet());
console.log(user.meet());
var simpleCalculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    }
};
var add = simpleCalculator.add(5, 3); // 8
var sub = simpleCalculator.subtract(10, 4); // 6
console.log("Addition: ".concat(add));
console.log("Subtraction: ".concat(sub));
var multiplier = {
    a: 4,
    b: 5,
    multiply: function (x, y) {
        return x * y * this.a * this.b;
    }
};
var product = multiplier.multiply(2, 3); // 120
console.log("Product: ".concat(product));
