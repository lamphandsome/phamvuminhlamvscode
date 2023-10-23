var firstItem = document.getElementById('one');
if (firstItem.hasAttribute('class'))//hasAttribute: kiem tra xem the co id la one co class hay khong 
{
  var attr = firstItem.getAttribute('class');
  //getAttribute: lay ra gia tri cua class
}
var el = document.getElementById('scriptResults');
el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';
  