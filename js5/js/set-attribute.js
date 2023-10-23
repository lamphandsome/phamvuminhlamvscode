var firstItem = document.getElementById('one');
firstItem.className = 'complete';
var fourthItem = document.getElementsByTagName('li').item(3);
//getElementsByTagName: lay ra tat ca cac the li
//item: lay ra the li thu 4
fourthItem.setAttribute('class', 'cool');
//setAttribute: them thuoc tinh class vao the li thu 4