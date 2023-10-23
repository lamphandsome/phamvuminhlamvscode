var startItem = document.getElementById('two');
//truy cap vao the co id la two va gan vao bien startItem
var prevItem = startItem.previousSibling;
//previousSibling: truy cap vao phan tu truoc no
var nextItem = startItem.nextSibling;
//nextSibling: truy cap vao phan tu sau no
prevItem.className = 'complete';
nextItem.className = 'cool';