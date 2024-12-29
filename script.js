document.getElementById("currentYear").textContent = new Date().getFullYear();


// Select all gallery images
const galleryImages = document.querySelectorAll('.gallery-img');

// Create a lightbox container dynamically
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
lightbox.style.display = 'none'; // Initially hide the lightbox
document.body.appendChild(lightbox);

// Add event listeners to each image
galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex'; // Show the lightbox
        const img = document.createElement('img'); // Create an img element
        img.src = image.src; // Set the source to the clicked image
        img.classList.add('lightbox-img');
        lightbox.innerHTML = ''; // Clear any existing content
        lightbox.appendChild(img); // Add the image to the lightbox
    });
});

// Hide the lightbox when clicked
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Hide the lightbox
});

