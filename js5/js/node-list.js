var hotItems = document.querySelectorAll('li.hot');
//truy cap vao tat ca the li.hot va gan vao bien hotItems
if (hotItems.length > 0) {
    for (var i =0; i < hotItems.length; i++) {
        hotItems[i].className = 'cool';
    }
}