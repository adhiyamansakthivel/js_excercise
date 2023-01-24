let home = 0;
let guest = 0;

const homeContent = document.getElementById("homeContent");
const guestContent = document.getElementById("guestContent");

homeContent.innerText = home;
guestContent.innerText = guest;


function home_event(value){
    switch (value) {
        case 'one': 
            home += 1
            if(home === guest){
                homeContent.innerHTML = ("<span style='color:white'>" + home + "</span>");
                guestContent.innerHTML = ("<span style='color:white'>" + guest + "</span>");

            }else if(home > guest){
                homeContent.innerHTML = ("<span style='color:yellow'>" + home + "</span>");
                guestContent.innerHTML = ("<span>" + guest + "</span>");
            }else{
                homeContent.innerText = home;

            };
        break;
     
        case 'two': 
            home += 2
            if(home === guest){
                homeContent.innerHTML = ("<span style='color:white'>" + home + "</span>");
                guestContent.innerHTML = ("<span style='color:white'>" + guest + "</span>");
        
            }else if(home > guest){
                homeContent.innerHTML = ("<span style='color:yellow'>" + home + "</span>");
                guestContent.innerHTML = ("<span>" + guest + "</span>");
            }else{
                homeContent.innerText = home;
        
            };
        break;
     
        case 'three': 
            home += 3
            if(home === guest){
                homeContent.innerText = home;
                guestContent.innerText = guest;
        
            }else if(home > guest){
                homeContent.innerHTML = ("<span style='color:yellow'>" + home + "</span>");
                guestContent.innerHTML = ("<span>" + guest + "</span>");
            }else{
                homeContent.innerText = home;
        
            };
        break;
     
     }
}



function guest_event(value){
    switch (value) {
        case 'one': 
            guest += 1

            if(home === guest){
                homeContent.innerHTML = ("<span style='color:white'>" + home + "</span>");
                guestContent.innerHTML = ("<span style='color:white'>" + guest + "</span>");
      
            }else if(home < guest){
                guestContent.innerHTML = ("<span style='color:yellow'>" + guest + "</span>");
                homeContent.innerHTML = ("<span>" + home + "</span>");
            }else{
                guestContent.innerText = guest;
            }     
        break;
     
        case 'two': 
            guest += 2

            if(home === guest){
                homeContent.innerHTML = ("<span style='color:white'>" + home + "</span>");
                guestContent.innerHTML = ("<span style='color:white'>" + guest + "</span>");
           }else if(home < guest){
                guestContent.innerHTML = ("<span style='color:yellow'>" + guest + "</span>");
                homeContent.innerHTML = ("<span>" + home + "</span>");
            }else{
                guestContent.innerText = guest;
            }     ;
        break;
     
        case 'three': 
            guest += 3
            if(home === guest){
                homeContent.innerHTML = ("<span style='color:white'>" + home + "</span>");
                guestContent.innerHTML = ("<span style='color:white'>" + guest + "</span>");
        
            }else if(home < guest){
                guestContent.innerHTML = ("<span style='color:yellow'>" + guest + "</span>");
                homeContent.innerHTML = ("<span>" + home + "</span>");
            }else{
                guestContent.innerText = guest;
            } ;    
        break;
     
     }
}




function reset(){
  
    home = 0;
    guest = 0;
    homeContent.innerText = home;
    guestContent.innerText = guest;
}