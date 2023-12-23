const textContainer = document.getElementById('text-container');
const spans = textContainer.getElementsByTagName('span');

function addBounceAnimation() {
    Array.from(spans).forEach((span, index) => {
        span.style.animation = `bounce 2s infinite ${index * 0.1}s`;
    });
}

addBounceAnimation();


//
document.addEventListener("DOMContentLoaded", function () {
    createSnowflakes(".snowflakes", 0); // Group 1 with delay 0s
    createSnowflakes(".snowflakes1", 2); // Group 2 with delay 5s
    createSnowflakes(".snowflakes2", 3); // Group 3 with delay 10s
    createSnowflakes(".snowflakes3", 1); // Group 3 with delay 10s
    createSnowflakes(".snowflakes4", 4); // Group 3 with delay 10s

    function createSnowflakes(containerSelector, delay) {
        const snowflakesContainer = document.querySelector(containerSelector);

        for (let i = 0; i < 50; i++) {
            const snowflake = document.createElement("div");
            snowflake.className = "snowflake";

            // Tạo một giá trị ngẫu nhiên từ 0 đến 1 và gán vào thuộc tính --random-x
            snowflake.style.setProperty('--random-x', Math.random());

            // Thiết lập delay cho animation
            snowflake.style.animationDelay = `${delay + Math.random() * 5}s`;

            snowflakesContainer.appendChild(snowflake);
        }
    }
});

//

//
var button = document.getElementById('yesButton');
var counting = true;

function countdownAndChangeText() {
    var count = 10;

    function countStep() {
        if (count >= 1) {
            button.innerHTML = count;
            count--;
            setTimeout(countStep, 1000);
            button.style.color = 'white';
        } else {
            button.innerHTML = 'Yes';
            counting = false; // Đã hoàn tất đếm
            button.style.color = 'white'; // Đặt màu sắc thành trắng khi đếm xong
        }
    }

    countStep();
}

// Sự kiện click sẽ được ngăn chặn khi đang trong quá trình đếm
button.addEventListener('click', function () {
    if (!counting) {
        window.location.href = 'main.html';
        // Đặt lại trạng thái đếm khi nút được nhấp
        counting = true;
        countdownAndChangeText();
    }
});

// Bắt đầu đếm khi trang đã tải hoàn toàn
document.addEventListener('DOMContentLoaded', countdownAndChangeText);

//
if (window.innerWidth < window.innerHeight) {
    // Thiết lập chế độ xoay ngang nếu đang ở chế độ đứng
    document.body.style.orientation = 'landscape';
}
