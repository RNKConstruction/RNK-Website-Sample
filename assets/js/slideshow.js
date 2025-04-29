document.addEventListener("DOMContentLoaded", function () {
    const images = [
		"assets/images/home.jpg",
        "assets/images/home2.jpg",
        "assets/images/home3.jpg",
        "assets/images/home7.jpg",
        "assets/images/home5.jpg",

    ];

    let index = 0;
    const header = document.querySelector("header");

    function changeBackground() {
        header.style.backgroundImage = `url('${images[index]}')`;
        index = (index + 1) % images.length;
    }

    setInterval(changeBackground, 2000); // Change image every 5 seconds
    changeBackground(); // Initial load
});
