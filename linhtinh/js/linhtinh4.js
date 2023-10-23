var newel = document.createElement('li');
var newtext = document.createTextNode('Nụ cười');
var newel2 = document.createElement('li');
var newtext2 = document.createTextNode('Cuteeee');
var position = document.getElementsByTagName('ul')[0];
position.insertBefore(newel, position.childNodes[0]);

newel.appendChild(newtext);
newel2.appendChild(newtext2);
var position2 = document.getElementsByTagName('ul')[0];
position2.appendChild(newel2);

var listItems = document.querySelectorAll('li');
var i;
for (i = 0; i < listItems.length; i++) {
    listItems[i].className = 'dark';
}
var heading = document.querySelector('h1');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;