//enum by default starts from 0 index until specified otherwise
enum HTTPStatus{
    PASS,FAIL,INPROGRESS
}
const MYstatus:HTTPStatus=HTTPStatus.PASS
const ANOTHERstatus:HTTPStatus[]=[HTTPStatus.PASS,HTTPStatus.FAIL,HTTPStatus.INPROGRESS]

function getStatus(status:HTTPStatus)
{
    console.log("Status is:",status);
}
getStatus(HTTPStatus.INPROGRESS)
//below will print the index of the enum value
console.log(HTTPStatus.FAIL);

enum Role{
    ADMIN=100,READ_ONLY=200,AUTHOR=300,CONTRIBUTOR
}
console.log(Role.AUTHOR);
console.log(Role.CONTRIBUTOR); //will be 301 as previous value is 300 as per enum auto increment by 1


enum WeekDays{
    SUNDAY="SUN",
    MONDAY="MON",
    TUESDAY="TUE",
    WEDNESDAY="WED",
    THURSDAY="THU",
    FRIDAY="FRI",
    SATURDAY="SAT",
    MEOW=123
}

console.log(WeekDays.WEDNESDAY);
console.log(WeekDays.MEOW);