// Smooth scrolling for navigation links
function scrollToSection(selector) {
    document.querySelector(selector).scrollIntoView({
        behavior: 'smooth'
    });
}

// Modal functionality for gallery
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}

// Close modal when clicking outside the image
window.onclick = function (event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form submission
document.getElementById('wedding-rsvp').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your RSVP! We look forward to celebrating with you.');
    this.reset();
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.couple, .event, .gallery-item');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animated elements
document.querySelectorAll('.couple, .event, .gallery-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Run animation check on scroll and load
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
