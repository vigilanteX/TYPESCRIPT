interface IColor
{
    color:string;
    getColor():String;
}
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
class ColorImpl2 implements IColor
{
    constructor(public color:string) {
        
    }
    getColor(): String {
        return this.color;
    }
    
}
const impl2=new ColorImpl2('red')
console.log(impl2.getColor())