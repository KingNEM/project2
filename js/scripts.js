
const getName = () => {
let Name = document.getElementById
("Name").value
let gender = document.getElementById("gender")
.value// check the gender the user has checked
let dayBorn = parseInt( ( ( (21/4) -2*21-1) + ((5*00/4) ) + ((26*(11+1)/10)) + 17 ) % 7
)
// ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
console.log(dayBorn)
const daysofTheWeek = ["Sun","Mon","Tue","Wed","Tue","Wed","Thurs","Fri","Sat"]
console.log(daysofTheWeek[dayborn])
let dayofTheweek = daysofTheWeek[dayBorn]
const male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
const female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
// introduce control flows
//if (gender = "male"&& day of the week = "sun" ){
    // console.log(male[dayBorn])
// }

