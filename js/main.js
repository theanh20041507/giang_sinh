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
    createSnowflakes(".snowflakes1", 1); // Group 2 with delay 5s
    createSnowflakes(".snowflakes2", 2); // Group 3 with delay 10s

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
document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = 'main.html';
});

//
