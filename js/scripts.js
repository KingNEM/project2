
const getName = () => {
    //CC - is the century digits. For example 1989 has CC = 19
    //YY - is the Year digits (1989 has YY = 89)
    //MM -  is the Month
    //DD - is the Day of the month 
    //mod - is the modulus function ( % )
// ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
let dayBorn = parseInt( ( ( (21/4) -2*21-1) + ((5*00/4) ) + ((26*(11+1)/10)) + 17 ) % 7
)
console.log(dayBorn)
let daysofTheWeek = ["Sun","Mon","Tue","Wed","Tue","Wed","Thurs","Fri","Sat"]
console.log(daysofTheWeek[dayborn])
const dayofTheweek = daysofTheWeek[dayBorn]
let gender = document.getElementById("gender")
.value// check the gender the user has radiod
const male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
const female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
// introduce control flows
//if (gender === "male"&& day of the week === "Fri" ){
    // console.log(male[Yaw])
    
if (getName == "") {
    alert("Name must pop out");
    return wrong;
}
// }

