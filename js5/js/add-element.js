var newEl = document.createElement('li');
//createElement: tao ra 1 the moi
var newText = document.createTextNode('quinoa');
//createTextNode: tao ra 1 text moi
newEl.appendChild(newText);
//appendChild: them text vao the moi
var position = document.getElementsByTagName('ul')[0];
//getElementsByTagName: lay ra tat ca cac the ul
position.appendChild(newEl);
//appendChild: them the moi vao the ul dau tien