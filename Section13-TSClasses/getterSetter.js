"use strict";
class Employee {
    // constructor(a:string,b:string)
    // {
    //     this.x=a;
    //     this.y=b;
    // }
    get XValue() {
        return this.x;
    }
    get YValue() {
        return this.y;
    }
    set XValueSet(a) {
        this.x = a;
    }
    set YValueSet(b) {
        this.y = b;
    }
}
let e = new Employee();
e.XValueSet = "Aman";
e.YValueSet = "Dixitt";
console.log(e.XValue, e.YValue);
