
        const getName = () => {
            const Day = prompt(parseInt(document.getElementById("day"))).value
            {// if  (day<= 0) or (day > 31)
             console.log("invalid entry"); 
             alert("invalid entry!");
            }  
            const Month = prompt(parseInt(document.getElementById("month"))).value
           { // if (month<= 0) or (month > 12)
             console.log("invalid entry");
             alert("invalid entry!");
            }
            const Year = prompt(parseInt(document.getElementById("month"))).value
            const Gender = document.getElementById("gender").value//check the gender the user has radiod
            let day = parseInt( ( ( (21/4) -2*21-1) + ((5*00/4) ) + ((26*(11+1)/10)) + 17 ) % 7)
            // ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
             //where; 
               //CC - is the century digits. For example 1989 has CC = 19
               //YY - is the Year digits (1989 has YY = 89)
               //MM -  is the Month
               //DD - is the Day of the month 
               //mod - is the modulus function ( % )
              console.log("dayborn")
           const daysofTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]
           console.log(daysofTheWeek[dayborn])
           let dayofTheWeek = daysofTheWeek[dayborn]
           const male = [ "Kwasi", "Kwadwo", " Kwabena", "Kwaku", "Yaw", " Kofi", "Kwame"]
           const female = [ "Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", " Afua", " Ama"]
        
           // introduce control flaws
            // if (gender === "male" && dayofTheWeek === "sun") {
                // console.log(male[dayborn],"Kofi")
          // }
        
        console.log("Name")
        
        }           