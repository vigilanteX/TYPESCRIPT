abstract class Employeeee {
    
    constructor(private firstName:string,private lastName:string) {
    }
    abstract getPay():number;
    greeting():void{
        console.log("HELLO")
    }
    
}

class PermanentEmployee extends Employeeee
{
    constructor(firstName:string,lastName:string,private salary:number)
    {
        super(firstName,lastName)
    }
    getPay(): number {
        return this.salary;
    }
}
const permanetEmployee=new PermanentEmployee('aman','dixit',23)
console.log(permanetEmployee)