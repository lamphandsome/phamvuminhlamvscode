var elements = document.getElementsByTagName('li');
//truy cap vao the li va gan vao bien elements
if (elements.length > 0) {
    //so phan tu la 0 thi thuc hien
    var el = elements[0];
    //lay phan tu so 0 trong mang elements va gan vao bien el
    el.className = 'cool';
}