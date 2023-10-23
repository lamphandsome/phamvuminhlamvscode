var el = document.querySelector('li.hot');
//truy cap vao the li.hot dau tien va gan vao bien el
el.className = 'cool';
var els = document.querySelectorAll('li.hot');
//truy cap vao tat ca the li.hot va gan vao bien els
els[1].className = 'cool';
//gan class cool cho phan tu thu 2 trong mang els, bo qua querySelector vi da bi bien doi