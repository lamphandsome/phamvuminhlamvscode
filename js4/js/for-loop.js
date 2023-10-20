var scores = [24, 32, 17, 16, 86];
var arrayLength = scores.length;
var roundNumber = 0;
var msg ='';
for(var i =0; i < arrayLength;i++){
    roundNumber = (i+1);
msg += 'round ' + roundNumber + ': '
msg += scores[i] + '<br />';
}
document.getElementById('answer').innerHTML = msg;