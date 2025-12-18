const a:number[]=[1,2,3];
const b:string[]=['aa','ba','ca'];

const c:Array<number>=[4,5,6];
c.push(7)
c.push(8)
console.log(c)


type Employee={
    name:string,
    age:number,
    salary:number
}
let d:Array<Employee>=[];
console.log(d);
d.push({name:'Aman',age:18,salary:3000});
d.push({name:'Dixit',age:28,salary:4000});
console.log(d);


//2D ARRAY
const arr:number[][]=[[1,2,3],[4,5,6],[7,8,9]];

type Matrix=number[][];
const m1:Matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(m1);