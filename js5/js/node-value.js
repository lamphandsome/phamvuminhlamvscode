var iTemTwo = document.getElementById('two');
//truy cap vao the co id la two va gan vao bien iTemTwo
var elText = iTemTwo.firstChild.nodeValue;
//firstChild: truy cap vao the con dau tien cua the co id la two
//nodeValue: lay gia tri cua the con dau tien cua the co id la two
elText = elText.replace('pine nuts', 'kale');
//replace: thay the chuoi pine nuts bang chuoi kale
iTemTwo.firstChild.nodeValue = elText;
//gan lai gia tri cho the con dau tien cua the co id la two