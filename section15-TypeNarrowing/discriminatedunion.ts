interface Cat
{
    name:string;
    age:number;
    common_type:'cat'
}
interface Dog
{
    name:string;
    age:number;
    days:number;
    common_type:'dog';
}
interface Pig
{
    name:string;
    age:number;
    weight:number;
    common_type:'pig';
}

type Animal=Cat|Dog|Pig

function animal(name:Animal)
{
    switch(name.common_type)
    {
        case 'pig':
            return 'OINK'
        case 'cat':
            return 'MEOW'
        case 'dog':
            return 'BOW BOW'        
    }
}