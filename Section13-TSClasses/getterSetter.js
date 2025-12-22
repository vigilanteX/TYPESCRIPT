var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "XValue", {
        // constructor(a:string,b:string)
        // {
        //     this.x=a;
        //     this.y=b;
        // }
        get: function () {
            return this.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "YValue", {
        get: function () {
            return this.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "XValueSet", {
        set: function (a) {
            this.x = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "YValueSet", {
        set: function (b) {
            this.y = b;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var e = new Employee();
e.XValueSet = "Aman";
e.YValueSet = "Dixitt";
console.log(e.XValue, e.YValue);
