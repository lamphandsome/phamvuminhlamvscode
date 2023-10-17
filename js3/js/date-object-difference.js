var today = new Date();
var year = today.getFullYear;
var est = new Date('apr 16, 2021 15:45:55');
var difference = today.getTime() - est.getTime();
difference = (difference / 31556900000);
var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + ' years of online travel advive';