var i = 7;
var msg = '';
while(i<15){
    msg+= i + 'x 5 = ' + (i*5) + '<br />';
    i++;
}
document.getElementById('answer').innerHTML = msg;