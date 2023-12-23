document.addEventListener("DOMContentLoaded", function () {
    createSnowflakes(".snowflakes", 0); // Group 1 with delay 0s
    createSnowflakes(".snowflakes1", 2); // Group 2 with delay 5s
    createSnowflakes(".snowflakes2", 3); // Group 3 with delay 10s
    createSnowflakes(".snowflakes3", 1); // Group 3 with delay 10s

    createSnowflakes(".snowflakes4", 4); // Group 3 with delay 10s


    function createSnowflakes(containerSelector, delay) {
        const snowflakesContainer = document.querySelector(containerSelector);

        for (let i = 0; i < 30; i++) {
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
const star = document.getElementById('shiningStar');
const shine = document.querySelector('.shine');

setInterval(() => {
    // Sáng hơn màu vàng
    shine.style.opacity = '1';
    star.style.color = 'white';

    // Trả lại màu vàng sau 0.5 giây
    setTimeout(() => {
        shine.style.opacity = '0';
        star.style.color = 'gold';
    }, 2000);
}, 5000);

//
document.addEventListener("DOMContentLoaded", function () {
    var giftList = document.getElementById("giftList");
    var letterDiv = document.querySelector(".letter");
    var closeButton = document.getElementById("closeButton");

    // Typewriter effect implementation
    const text = document.getElementById('animated-text').textContent.trim();
    document.getElementById('animated-text').textContent = '';

    let i = 0;
    let isTyping = false; // Biến để kiểm tra xem hiệu ứng typewriter đang chạy hay không

    function typeWriter() {
        if (i < text.length) {
            document.getElementById('animated-text').textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 20); // Adjust the speed here (in milliseconds)
        } else {
            isTyping = false; // Kết thúc hiệu ứng
        }
    }

    // Function to stop typewriter effect
    function stopTypewriter() {
        isTyping = false;
        i = text.length; // Set i to the end of the text to stop typing immediately
    }

    // Event listener for the "giftList" click
    giftList.addEventListener("click", function () {
        // Toggle visibility of the letter
        letterDiv.style.display = (letterDiv.style.display === "none" || letterDiv.style.display === "") ? "block" : "none";

        // Stop the typewriter effect if it is currently running
        if (isTyping) {
            stopTypewriter();
        }

        // Start the typewriter effect when the letter becomes visible and isTyping is false
        if (letterDiv.style.display === "block" && !isTyping) {
            document.getElementById('animated-text').textContent = ''; // Clear the existing text
            i = 0; // Reset the index for typewriter effect
            isTyping = true;
            typeWriter();
        }
    });

    closeButton.addEventListener("click", function (event) {
        // Prevent the default behavior of the anchor tag
        event.preventDefault();

        // Hide the letter when the close button is clicked
        letterDiv.style.display = "none";

        // Stop the typewriter effect
        stopTypewriter();
    });
});



//
document.addEventListener("DOMContentLoaded", function () {
    var giftList = document.getElementById("giftList1");
    var letterDiv = document.querySelector(".letter1");
    var closeButton = document.getElementById("closeButton1");

    // Typewriter effect implementation
    const text = document.getElementById('animated-text1').textContent.trim();
    document.getElementById('animated-text1').textContent = '';

    let i = 0;
    let isTyping = false;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById('animated-text1').textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 20); // Adjust the speed here (in milliseconds)
        } else {
            isTyping = false;
        }
    }

    function stopTypewriter() {
        isTyping = false;
        i = text.length;
    }

    giftList.addEventListener("click", function () {
        // Toggle visibility of the letter
        letterDiv.style.display = (letterDiv.style.display === "none" || letterDiv.style.display === "") ? "block" : "none";

        // Stop the typewriter effect if it is currently running
        if (isTyping) {
            stopTypewriter();
        }

        // Start the typewriter effect when the letter becomes visible and isTyping is false
        if (letterDiv.style.display === "block" && !isTyping) {
            document.getElementById('animated-text1').textContent = ''; // Clear the existing text
            i = 0;
            isTyping = true;
            typeWriter();
        }
    });

    closeButton.addEventListener("click", function (event) {
        // Prevent the default behavior of the anchor tag
        event.preventDefault();

        // Hide the letter when the close button is clicked
        letterDiv.style.display = "none";

        // Stop the typewriter effect
        stopTypewriter();
    });
});

//
document.addEventListener("DOMContentLoaded", function () {
    var giftList = document.getElementById("giftList2");
    var letterDiv = document.querySelector(".letter2");
    var closeButton = document.getElementById("closeButton2");

    // Typewriter effect implementation
    const text = document.getElementById('animated-text2').textContent.trim();
    document.getElementById('animated-text2').textContent = '';

    let i = 0;
    let isTyping = false;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById('animated-text2').textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 20); // Adjust the speed here (in milliseconds)
        } else {
            isTyping = false;
        }
    }

    function stopTypewriter() {
        isTyping = false;
        i = text.length;
    }

    giftList.addEventListener("click", function () {
        // Toggle visibility of the letter
        letterDiv.style.display = (letterDiv.style.display === "none" || letterDiv.style.display === "") ? "block" : "none";

        // Stop the typewriter effect if it is currently running
        if (isTyping) {
            stopTypewriter();
        }

        // Start the typewriter effect when the letter becomes visible and isTyping is false
        if (letterDiv.style.display === "block" && !isTyping) {
            document.getElementById('animated-text2').textContent = ''; // Clear the existing text
            i = 0;
            isTyping = true;
            typeWriter();
        }
    });

    closeButton.addEventListener("click", function (event) {
        // Prevent the default behavior of the anchor tag
        event.preventDefault();

        // Hide the letter when the close button is clicked
        letterDiv.style.display = "none";

        // Stop the typewriter effect
        stopTypewriter();
    });
});

//
const container = document.querySelector('.Santa_Claus__container');

function animate() {
    container.style.left = '20%';

    setTimeout(() => {
        container.style.left = '0%';
        setTimeout(() => {
            requestAnimationFrame(animate);
        }, 10000); // 10 seconds pause
    }, 2000); // 4 seconds pause before going back to 0%
}

requestAnimationFrame(animate); // Start the animation

//

anime.timeline({ loop: true })
    .add({
        targets: '.animated-text span',
        translateY: [-10, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: (el, i) => i * 50
    })
    .add({
        targets: '.animated-text span',
        translateX: [0, 10],
        opacity: [1, 0],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: (el, i) => i * 50
    });


//
// Get the button element by its ID
var facebookButton = document.getElementById("facebook");

// Add a click event listener to the button
facebookButton.addEventListener("click", function () {
    // Redirect to the specified URL
    window.location.href = "https://www.facebook.com/profile.php?id=100040189193891";
});

//
if (window.innerWidth < window.innerHeight) {
    // Thiết lập chế độ xoay ngang nếu đang ở chế độ đứng
    document.body.style.orientation = 'landscape';
}
