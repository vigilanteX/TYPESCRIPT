//way 1
// class ColorImpl implements IColor
// {
//     color= 'red';
//     getColor(): String {
//         return this.color;
//     }
// }
// const color1=new ColorImpl();
// console.log(color1.getColor())
//way2
var ColorImpl2 = /** @class */ (function () {
    function ColorImpl2(color) {
        this.color = color;
    }
    ColorImpl2.prototype.getColor = function () {
        return this.color;
    };
    return ColorImpl2;
}());
var impl2 = new ColorImpl2('red');
console.log(impl2.getColor());
