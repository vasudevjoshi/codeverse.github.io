let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}



let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}


document.addEventListener('DOMContentLoaded', function() {
   const carouselContainer = document.querySelector('.carousel-container');
   const slides = document.querySelectorAll('.carousel-slide');
   const prevBtn = document.getElementById('prevBtn');
   const nextBtn = document.getElementById('nextBtn');
   const slideWidth = slides[0].offsetWidth; // Assuming all slides have the same width
   let currentSlide = 0;

   function scrollToSlide(index) {
       // Calculate the scroll position based on the circular behavior
       const newIndex = (index + slides.length) % slides.length;
       const scrollLeft = newIndex * slideWidth;
       carouselContainer.scrollTo({
           left: scrollLeft,
           behavior: 'smooth'
       });
       currentSlide = newIndex;
   }

   nextBtn.addEventListener('click', function() {
       scrollToSlide(currentSlide + 1);
   });

   prevBtn.addEventListener('click', function() {
       scrollToSlide(currentSlide - 1);
   });

   // Optional: Automatically scroll to the first slide on page load
   scrollToSlide(0);
});
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
let currentIndex = 0;

// Function to show the next slide
function showNextSlide() {
   currentIndex++;
   if (currentIndex >= totalSlides) {
       currentIndex = 0;
   }
   updateCarousel();
}

// Function to show the previous slide
function showPreviousSlide() {
   currentIndex--;
   if (currentIndex < 0) {
       currentIndex = totalSlides - 1;
   }
   updateCarousel();
}

// Function to update the carousel
function updateCarousel() {
   const carouselContainer = document.querySelector('.carousel-container');
   const translateXValue = -currentIndex * 100;
   carouselContainer.style.transform = `translateX(${translateXValue}%)`;
}

// Set the interval for the auto slide
let slideInterval = setInterval(showNextSlide, 3000); // Change slide every 2 seconds

// Pause the auto slide when hovering over the carousel
document.querySelector('.course-img').addEventListener('mouseenter', () => {
   clearInterval(slideInterval);
});

// Resume the auto slide when leaving the carousel
document.querySelector('.course-img').addEventListener('mouseleave', () => {
   slideInterval = setInterval(showNextSlide, 3000);
});

// Add event listeners to navigation buttons
document.getElementById('nextBtn').addEventListener('click', () => {
   clearInterval(slideInterval); // Stop auto slide when manually navigating
   showNextSlide();
   slideInterval = setInterval(showNextSlide, 3000); // Restart auto slide
});

document.getElementById('prevBtn').addEventListener('click', () => {
   clearInterval(slideInterval); // Stop auto slide when manually navigating
   showPreviousSlide();
   slideInterval = setInterval(showNextSlide, 3000); // Restart auto slide
});

// Initial display
updateCarousel();

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');
      sideBar.classList.remove('active');
      body.classList.remove('active');
}
(function() {
   document.getElementById('loginForm').addEventListener('submit', function(event) {
       event.preventDefault();

       console.log("Form submitted");

       const email = document.getElementById('email').value;
       const password = document.getElementById('password').value;
       const errorElement = document.getElementById('error');

       const validEmail = 'user@example.com';
       const validPassword = 'password123';

       console.log("Email entered: " + email);
       console.log("Password entered: " + password);

       if (email === validEmail && password === validPassword) {
           console.log("Redirecting to home.html");
           window.location.href = 'home.html';  // Redirect to home.html
       } else {
           console.log("Invalid email or password");
           errorElement.textContent = 'Invalid email or password';
       }
   });
})();
