var iTemTwo = document.getElementById('two');
var elText = iTemTwo.firstChild.nodeValue;
elText = elText.replace('pine nuts', 'kale');
iTemTwo.firstChild.nodeValue = elText;