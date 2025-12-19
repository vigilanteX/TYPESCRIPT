class Player
{
    //always property declaration is required in typescript
    readonly first:string;
    readonly last:string;
    score=0;//this works as well as we have assigned value to it and it can infer type number
    constructor(first:string,last:string)
    {
        //we cannot directly this.first=first; without declaring property first
        this.first=first;
        this.last=last;
    }
}

let player=new Player("Sachin","Tendulkar");
//player.first="MS";//Cannot assign to 'first' because it is a read-only property.