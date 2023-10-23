var elements = document.getElementsByClassName('hot');
//lay phan tu co class ten la hot va gan vao bien elements
if (elements.length >= 2) {
    //so phan tu la 3 thi thuc hien
    var el = elements[2];
    //lay phan tu so 2 trong mang elements va gan vao bien el
    el.className = 'cool';
}