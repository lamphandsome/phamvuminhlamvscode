var i = 1;
var msg = '';
while(i<11){
    msg+= i + 'x 9 = ' + (i*9) + '<br />';
    i++;
}
document.getElementById('answer').innerHTML = msg;