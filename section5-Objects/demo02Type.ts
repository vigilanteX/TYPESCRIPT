let coordinate:{x:number,y:number}={x:10,y:20};
function person():{x:number,y:number}
{
    return {x:5,y:15};
}
function paramPerson(point:{x:number,y:number}):{x:number,y:number}
{
    return {x:5,y:15};
}

//above we are seeing repetition of type annotation {x:number,y:number}
//we can use type alias to avoid repetition
type COOR={
    x:number,
    y:number
}
let coordinate2:COOR={x:10,y:20};
function person2():COOR
{
    return {x:5,y:15};
}
function paramPerson2(point:COOR):{x:number,y:number}
{
    return {x:5,y:15};
}

type NUM=number;
let num1:NUM=10;
let num2:NUM=20;