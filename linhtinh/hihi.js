// var today = new Date();
// var hourNow = today.getHours();
// if(hourNow > 18){
//     time = 'Good evening!';
//     greeting = 'evening'
// }else if(hourNow >12){
//     time = "Good afternoon!";
//     greeting = 'afternoon'
// }else if(hourNow > 0){
//     time = "Good morning!";
//     greeting = 'morning'
// } else{
//     time = 'Welcome!';
// }
// document.write('<h3 id="vl">' + time + '</h3>');
// var greetingElement = document.getElementById('greeting');
// greetingElement.className = greeting;

var greetingElement = document.getElementById('greeting');
var greeting = '';
var className = '';
var today = new Date();
var hourNow = today.getHours();
if(hourNow > 18){
         greeting = 'Good evening!';
         className = 'evening'
     }else if(hourNow >12){
         greeting = "Good afternoon!";
         className = 'afternoon'
     }else if(hourNow > 0){
         greeting = "Good morning!";
         className = 'morning'
    
     }
     greetingElement.textContent = greeting;
     greetingElement.className = className;

     var elTime = document.getElementById('time');
     elTime.textContent = `Time: ${today}`;
     elTime.className = 'time'
