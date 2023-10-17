var originalNumber = 10.23456;
var msg = '<h2>original number</h2><p>' + originalNumber + '</p>';
msg += '<h2>3 decimal places</h2><p>' + originalNumber.toFixed(3) + '</p>';
// fixed la lam tron sau dau phay
msg += '<h2>3 digits</h2><p>' + originalNumber.toPrecision(3) + '</p>';
// preccision la lam tron tong chu so

var el = document.getElementById('info');
el.innerHTML = msg;