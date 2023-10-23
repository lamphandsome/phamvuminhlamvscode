var firstItem = document.getElementById('one');
var itemContent = firstItem.innerHTML;
//innerHTML: lay noi dung cua the co id la one
firstItem.innerHTML = '<a href=\"http://example.org\">' + itemContent + '</a>';
//gan lai noi dung cho the co id la one