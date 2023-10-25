function checkUsername(){
    var username = el.value;
    if (username.length < 5){
        elMsg.className = 'warning';
        elMsg.textContent = 'Not long enough, yet...';
    } else {
        elMsg.textContent = '';
    }
}
function tipUsername(){
    elMsg.className = 'tip';
    elMsg.innerHTML = 'Username must be at least 5 characters';

}
var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');
el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);
//addEventListner la mot phuong thuc cua doi tuong, co 3 tham so
//'kieu cach su dung', 'ten ham xu ly su kien', 'true/false'