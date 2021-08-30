

 var start = document.querySelector("#start-counter");
 var minute = document.querySelector(".save-counter");
 var hour = document.querySelector(".reset-counter");
 
 //console.log(stopInterval)
 var date = document.querySelector("#smart");
 date.innerHTML = new Date();
   let count = 0;
   let minCount = 0;
   let hourCount = 0;  
   let mySeconds;
   let myMinute;
   let myHour;
   

//console.log(start);

var btn = document.querySelector(".start-btn");
var countBody = btn.addEventListener("click",onClick)

function onClick() {
    mySeconds = setInterval(() => {
       count++;
       start.innerHTML = count; 
    },1000);

    myMinute = setInterval(() => {
       minCount++;
       minute.innerHTML = minCount;
    },60000)

    myHour = setInterval(() => {
       hourCount++;
       hour.innerHTML = hourCount;
    },3600000)  

  
              
};
  

 

      function endInterval() {
         if (mySeconds) {
           clearInterval(mySeconds)
            count = 0


         }if (myMinute) {
            
             clearInterval(myMinute)
             minCount = 0
            
         }if (myHour) {
            
              clearInterval(myHour)
              hourCount = 0
                   
            }
                       
            
         }
        
              
                       




 


    
   



 
 
