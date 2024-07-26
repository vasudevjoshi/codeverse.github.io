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

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');
      sideBar.classList.remove('active');
      body.classList.remove('active');
}