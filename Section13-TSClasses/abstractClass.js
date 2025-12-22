"use strict";
class Employeeee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting() {
        console.log("HELLO");
    }
}
class PermanentEmployee extends Employeeee {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
const permanetEmployee = new PermanentEmployee('aman', 'dixit', 23);
console.log(permanetEmployee);
