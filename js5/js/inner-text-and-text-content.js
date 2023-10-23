var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
//textContent: lay ra noi dung cua the
var showInnerText = firstItem.innerText;
//innerText: lay ra noi dung cua the
var msg = '<p>textContent: ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;
firstItem.textContent = 'sourdough bread';
