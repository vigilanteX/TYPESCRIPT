class Employeee
{
    private a:string;
    public b:string;
    protected c:string
    constructor(x:string,y:string,z:string)
    {
        this.a=x;
        this.b=y;
        this.c=z;
    }

}
// const emp1=new Employeee('a','b','c')
// console.log(emp1)
class ChildEmployeee extends Employeee
{
    private salary:number;
    constructor(salVal:number,a:string,b:string,c:string)
    {
        super(a,b,c)
        this.c='mod'
        //this.a='mod a'//Property 'a' is private and only accessible within class 'Employeee'.
        this.salary=salVal;
    }
}
const childEmployee=new ChildEmployeee(1000,'a','b','c')
console.log(childEmployee)