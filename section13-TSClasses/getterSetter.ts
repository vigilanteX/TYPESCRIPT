class Employee
{
    private x!:string;
    private y!:string;
    // constructor(a:string,b:string)
    // {
    //     this.x=a;
    //     this.y=b;
    // }

    get XValue():string
    {
        return this.x;
    }
    get YValue():string
    {
        return this.y;
    }
    set XValueSet(a:string)
    {
        this.x=a;
    }
    set YValueSet(b:string)
    {
        this.y=b;
    }
}
let e:Employee =new Employee()
e.XValueSet="Aman"
e.YValueSet="Dixitt"
console.log(e.XValue,e.YValue)