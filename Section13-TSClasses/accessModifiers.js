var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employeee = /** @class */ (function () {
    function Employeee(x, y, z) {
        this.a = x;
        this.b = y;
        this.c = z;
    }
    return Employeee;
}());
// const emp1=new Employeee('a','b','c')
// console.log(emp1)
var ChildEmployeee = /** @class */ (function (_super) {
    __extends(ChildEmployeee, _super);
    function ChildEmployeee(salVal, a, b, c) {
        var _this = _super.call(this, a, b, c) || this;
        _this.c = 'mod';
        //this.a='mod a'//Property 'a' is private and only accessible within class 'Employeee'.
        _this.salary = salVal;
        return _this;
    }
    return ChildEmployeee;
}(Employeee));
var childEmployee = new ChildEmployeee(1000, 'a', 'b', 'c');
console.log(childEmployee);
