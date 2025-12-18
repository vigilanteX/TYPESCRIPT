let age:number | string=18;
age="eighteen";


type Points={
    x:number,
    y:number;
}
type Locations={
    lat:number,
    long:number;
}

function printCoordinates(pt:Points | Locations){

    console.log(pt)
}
let p:Points={x:10,y:20};
printCoordinates(p);
let c:Locations={lat:40,long:50};
printCoordinates(c);


function addAge(age:number | string): number | string
{
    if(typeof age==="number")
    {
        return age+5;
    }
    return age+" is age";
}
console.log(addAge(25));
console.log(addAge("25"));
