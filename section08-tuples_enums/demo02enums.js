//enum by default starts from 0 index until specified otherwise
var HTTPStatus;
(function (HTTPStatus) {
    HTTPStatus[HTTPStatus["PASS"] = 0] = "PASS";
    HTTPStatus[HTTPStatus["FAIL"] = 1] = "FAIL";
    HTTPStatus[HTTPStatus["INPROGRESS"] = 2] = "INPROGRESS";
})(HTTPStatus || (HTTPStatus = {}));
var MYstatus = HTTPStatus.PASS;
function getStatus(status) {
    console.log("Status is:", status);
}
getStatus(HTTPStatus.INPROGRESS);
//below will print the index of the enum value
console.log(HTTPStatus.FAIL);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 100] = "ADMIN";
    Role[Role["READ_ONLY"] = 200] = "READ_ONLY";
    Role[Role["AUTHOR"] = 300] = "AUTHOR";
    Role[Role["CONTRIBUTOR"] = 301] = "CONTRIBUTOR";
})(Role || (Role = {}));
console.log(Role.AUTHOR);
console.log(Role.CONTRIBUTOR); //will be 301 as previous value is 300 as per enum auto increment by 1
var WeekDays;
(function (WeekDays) {
    WeekDays["SUNDAY"] = "SUN";
    WeekDays["MONDAY"] = "MON";
    WeekDays["TUESDAY"] = "TUE";
    WeekDays["WEDNESDAY"] = "WED";
    WeekDays["THURSDAY"] = "THU";
    WeekDays["FRIDAY"] = "FRI";
    WeekDays["SATURDAY"] = "SAT";
    WeekDays[WeekDays["MEOW"] = 123] = "MEOW";
})(WeekDays || (WeekDays = {}));
console.log(WeekDays.WEDNESDAY);
console.log(WeekDays.MEOW);
