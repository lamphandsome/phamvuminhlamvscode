var today = new Date();
var hourNow = today.getHours();
var time;
if(hourNow > 18){
    time = 'Good evening!';
}else if(hourNow >12){
    time = "Good afternoon!";
}else if(hourNow > 0){
    time = "Good morning!";
} else{
    time = 'Welcome!';
}

document.write('<h3>' + time + '</h3>');