var startItem = document.getElementsByTagName('ul')[0];
//truy cap vao the ul dau tien(neu co nhieu hon 1) va gan vao bien startItem
var firstItem = startItem.firstChild;
//firstChild: truy cap vao the con dau tien cua the ul dau tien
var lastItem = startItem.lastChild;
//lastChild: truy cap vao the con cuoi cung cua the ul dau tien
firstItem.className = 'complete';
lastItem.className = 'cool';