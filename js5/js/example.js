var list = document.getElementsByTagName("ul")[0];
var newItemLast = document.createElement("li");
var newTextLast = document.createTextNode("cream");
newItemLast.appendChild(newTextLast);
//appendChild: them vao cuoi cung cua the
list.appendChild(newItemLast);

var newItemFirst = document.createElement("li");
var newTextFirst = document.createTextNode("kale");
newItemFirst.appendChild(newTextFirst);
//insertBefore: them vao truoc the
list.insertBefore(newItemFirst, list.firstChild);


var listItems = document.querySelectorAll("li");

var i;
for (i = 0; i < listItems.length; i++) {
  listItems[i].className = "cool";
}

var heading = document.querySelector("h2");
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + "<span>" + totalItems + "</span>";
heading.innerHTML = newHeading;