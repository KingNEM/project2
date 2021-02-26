
const getName = () => {
let Month = document.getElementById
("Month").value//check the users input
let Year = document.getElementById("Year").value//check the users input
let Gender = document.getElementById("gender")
.value// check the gender the user has checked
let day = parseInt( ( ( (21/4) -2*21-1) + ((5*00/4) ) + ((26*(11+1)/10)) + 17 ) % 7
)
// ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
// CC - is the century digits. For example 1989 has CC = 19
// YY - is the Year digits (1989 has YY = 89)
// MM -  is the Month
// DD - is the Day of the month 
// mod - is the modulus function ( % )
console.log(dayBorn)
const daysofTheWeek = ["Sun","Mon","Tue","Wed","Tue","Wed","Thurs","Fri","Sat"]
console.log(daysofTheWeek[dayborn])
let dayofTheweek = daysofTheWeek[dayBorn]
const male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
const female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
// introduce control flows
//if (gender === "male"&& day of the week === "sun" ){
    // console.log(male[dayBorn])
// }
{if  (day<=0) or (day>31)
>alert("invalid input")}

{if  (month <= 0) or (month > 12)
    >alert("invalid input")}