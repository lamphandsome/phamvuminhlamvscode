var score = 51;
var msg = '';
function congratulate(){
    msg += 'Proceed to the next round.';
}
if (score>=50){
    congratulate();
    msg += 'Proceed to the next round';
}
var el = document.getElementById('answer');
el.innerHTML = msg; 