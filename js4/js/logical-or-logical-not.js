var score1 = 8;
var score2 = 5;
var pass1 = 6;
var pass2 = 6;
var minpass = (score1 >= pass1) || (score2 >= pass2);
//1 trong 2 dung la duoc
var msg = 'Resit required: '+ !minpass;
var el = document.getElementById('answer');
el.innerHTML = msg;