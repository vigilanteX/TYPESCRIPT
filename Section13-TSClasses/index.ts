class Player
{
    //always property declaration is required in typescript
    first:string;
    last:string;
    constructor(first:string,last:string)
    {
        //we cannot directly this.first=first; without declaring property first
        this.first=first;
        this.last=last;
    }
}

let player=new Player("Sachin","Tendulkar");