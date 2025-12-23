function triple(number:string|number)
{
    if(typeof number==='number')
    {
     console.log(number*3)
    }
    else
    {
     console.log(number+number+number)
    }

}
triple("2")