class Player
{
    //always property declaration is required in typescript
    //public is just an access modifier it can be omitted as by default all properties are public and it is just for better readability
    public readonly first:string;
    public readonly last:string;
    public score=0;//this works as well as we have assigned value to it and it can infer type number
    constructor(first:string,last:string)
    {
        //we cannot directly this.first=first; without declaring property first
        this.first=first;
        this.last=last;
        this.#secretMethod2();
    }
    //private method can be accessed only inside the class and this is used for encapsulation but keyword is just for better readability and
    //for compile time checking only
    private secretMethod():void
    {
        console.log("This is secret method");
    }
    //# makes the method truly private and cannot be accessed outside the class even using bracket notation
    #secretMethod2():void
    {
        console.log("This is secret method 2");
    }
    
}

let player=new Player("Sachin","Tendulkar");
//player.secretMethod();//Property 'secretMethod' is private and only accessible within class 'Player'.
//player.first="MS";//Cannot assign to 'first' because it is a read-only property.