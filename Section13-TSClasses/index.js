"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Player_instances, _Player_secretMethod2;
class Player {
    constructor(first, last) {
        _Player_instances.add(this);
        this.score = 0; //this works as well as we have assigned value to it and it can infer type number
        //we cannot directly this.first=first; without declaring property first
        this.first = first;
        this.last = last;
        __classPrivateFieldGet(this, _Player_instances, "m", _Player_secretMethod2).call(this);
    }
    //private method can be accessed only inside the class and this is used for encapsulation but keyword is just for better readability and
    //for compile time checking only
    secretMethod() {
        console.log("This is secret method");
    }
}
_Player_instances = new WeakSet(), _Player_secretMethod2 = function _Player_secretMethod2() {
    console.log("This is secret method 2");
};
let player = new Player("Sachin", "Tendulkar");
//player.secretMethod();//Property 'secretMethod' is private and only accessible within class 'Player'.
//player.first="MS";//Cannot assign to 'first' because it is a read-only property.
//Below code is same as we declare property as public and then assign with this.propName=propValue
class Meow {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const m = new Meow("aman", 100);
