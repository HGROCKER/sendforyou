var fut = new Date("Feb 16, 2026 00:00:00").getTime();

function updateTime() {
    var now = new Date().getTime();
    var D = fut - now;

    if (D < 0) {
        clearInterval(x);
        window.location.href = "intro.html";
        return; // Dừng hàm tại đây
    }

    var days = Math.floor(D / (1000 * 60 * 60 * 24));
    var hours = Math.floor((D / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((D / (1000 * 60)) % 60);
    var seconds = Math.floor((D / 1000) % 60);

    // Hiển thị và thêm số 0 phía trước nếu < 10
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

// Chạy ngay lập tức để không bị trễ 1 giây đầu
updateTime();

// Cập nhật mỗi giây (1000ms)
let x = setInterval(updateTime, 1000);