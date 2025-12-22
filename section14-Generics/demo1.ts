const nums:number[]=[1,2,3,4,5];
const nums2:Array<number>=[7,8,9,0]
//console.log(nums,nums2)
function identity<Type>(item:Type):Type
{
    return item;
}

const i=identity<string>("aman")
console.log(i)

function getRamdomElement<Type>(element:Type[]):Type
{
    const x=Math.floor(Math.random()*(element.length-1))
    console.log(x)
    return element[x]
}
const j=getRamdomElement<string>(['a','b','c','d'])
console.log(j)
//from below we didn't specify type<T> but it infered from input arrAY
const infer=getRamdomElement([1,2,3,4,5,6])


function getRandElements<T,U>(obj1:T,obj2:U)
{
    return {...obj1,...obj2}
}
console.log(getRandElements({name:"Aman"},{age:1000}))



// function extendingType<T extends object,U extends object>(obj1:T,obj2:U)
// {
//     return {...obj1,...obj2}
// }
// console.log(extendingType({name:"Aman"},12))