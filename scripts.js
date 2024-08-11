function showDetails(title, imageUrl, description, technologies, date, stars) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-image').src = imageUrl;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-technologies').innerText = `Technologies: ${technologies}`;
    document.getElementById('modal-date').innerText = `Date: ${date}`;

    // Clear previous stars
    const testimonialStars = document.getElementById('testimonial-stars');
    testimonialStars.innerHTML = '';

    // Add stars based on rating
    for (let i = 0; i < stars; i++) {
        const star = document.createElement('i');
        star.className = 'fas fa-star text-yellow-500';
        testimonialStars.appendChild(star);
    }
    for (let i = stars; i < 5; i++) {
        const star = document.createElement('i');
        star.className = 'far fa-star text-yellow-500';
        testimonialStars.appendChild(star);
    }

    document.getElementById('modal').classList.remove('hidden');
}

function hideModal() {
    document.getElementById('modal').classList.add('hidden');
}
const burgerMenu = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');

burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
    const isClickInside = burgerMenu.contains(event.target) || mobileMenu.contains(event.target);

    if (!isClickInside) {
        mobileMenu.classList.add('hidden');
    }
});

const menuLinks = mobileMenu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

    
const textArray = ["Hello, World!", "Welcome to my website.", "Enjoy your stay!"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

const typedTextSpan = document.getElementById("typed-text");

function type() {
if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
} else {
    setTimeout(erase, newTextDelay);
}
}

function erase() {
if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
} else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
}
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
setTimeout(type, newTextDelay + 250);
});

const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function updateSlide() {
      const offset = -currentIndex * 100;
      slider.style.transform = `translateX(${offset}%)`;
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
      });
    }

    function showNextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide();
    }

    function showPrevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlide();
    }

    document.getElementById('nextSlide').addEventListener('click', showNextSlide);
    document.getElementById('prevSlide').addEventListener('click', showPrevSlide);

    setInterval(showNextSlide, 3000); // Ubah slide setiap 3 detik
  