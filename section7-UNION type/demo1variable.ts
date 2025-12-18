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


//either number array or string array or boolean array
let stuff: (number[] | string[] | boolean[])=[];
stuff=[1,2,3,];
console.log(stuff);
stuff=["a","b","c"];
console.log(stuff);
stuff=[true,false,true];
console.log(stuff);
//stuff2 is an array which can contain number or string or boolean
let stuff2: (number| string | boolean)[]=[];
stuff2=[1,"a",true,2,"b",false];
console.log(stuff2);