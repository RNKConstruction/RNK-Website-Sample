 let index = 0;
    const slides = document.querySelectorAll('.slidesssss');
    const slider = document.querySelector('.projects-track');
    const totalSlides = slides.length;

    // Move the slide based on step (+1 or -1)
    function moveSlide(step) {
        index += step;

        if (index < 0) index = totalSlides - 1;  // Loop back to the last slide
        if (index >= totalSlides) index = 0;    // Loop back to the first slide

        slider.style.transform = `translateX(${-index * 100}%)`;  
    }

    // Modal Image Display
    function disableScroll() {
        document.body.classList.add("no-scroll");
    }

    function enableScroll() {
        document.body.classList.remove("no-scroll");
    }

    // Set up image click event to open the modal with the appropriate details
    document.querySelectorAll('.thumbnail').forEach(img => {
        img.addEventListener('click', function () {
            document.getElementById('mainImage').src = this.getAttribute('data-full');
            document.getElementById('imageDescription').innerText = this.getAttribute('data-description');

            document.getElementById('small1').src = this.getAttribute('data-small1');
            document.getElementById('small2').src = this.getAttribute('data-small2');
            document.getElementById('small3').src = this.getAttribute('data-small3');

            // Update the description for small thumbnails
            document.getElementById('small1').title = this.getAttribute('data-small1-description');
            document.getElementById('small2').title = this.getAttribute('data-small2-description');
            document.getElementById('small3').title = this.getAttribute('data-small3-description');

            document.getElementById('imageModal').style.display = "flex";
            disableScroll(); // Disable page scrolling
        });
    });

    // Close the modal
    function closeModal() {
        document.getElementById('imageModal').style.display = "none";
        enableScroll(); // Enable page scrolling
    }

    // Change the main image and description when a small image is clicked
    function changeMainImage(index) {
        let mainImage = document.getElementById('mainImage');
        let smallImages = [
            document.getElementById('small1').src,
            document.getElementById('small2').src,
            document.getElementById('small3').src
        ];

        // Change the main image
        mainImage.src = smallImages[index];

        // Get the new description based on the clicked small image
        const descriptions = [
            document.getElementById('small1').title,
            document.getElementById('small2').title,
            document.getElementById('small3').title
        ];

        // Update the description
        document.getElementById('imageDescription').innerText = descriptions[index];
    }