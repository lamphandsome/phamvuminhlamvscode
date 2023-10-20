function updateGreeting() {
    const timeElenment2 = document.getElementById('time2');
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const timeString2 = `${currentTime.getHours()}:${String(currentTime.getMinutes()).padStart(2, '0')}:${String(currentTime.getSeconds()).padStart(2, '0')}`;
    timeElenment2.textContent = timeString2;
    //const khai báo hằng số, giá trị không được cập nhật và PHẢI khởi tạo giá trị ban đầu

}
setInterval(updateGreeting, 1000);
// Gọi hàm cập nhật mỗi giây
updateGreeting();
// cập nhật lần đầu khi tải trang
function tinhtong(){
    var gia = 50000;
    let soluong = document.getElementById("soluong").value;
    var total = soluong * gia;
    if (total >= 100000){
        total *= 0.95;
    }else{
        total = total;
    }
    document.getElementById("total").innerHTML = total;
    
}
function changeColor() {
    const textElement = document.getElementById('color');
     // lấy ra màu sắc hiện tại của phần tử
    const currentColor = textElement.style.color;
    
    if (currentColor === 'firebrick') {
        textElement.style.color = 'yellow';
    } else {
        textElement.style.color = 'firebrick';
    }
}
setInterval(changeColor, 60000);
// Gọi hàm thay đổi màu mỗi giây
