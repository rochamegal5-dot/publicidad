const TOTAL_SLIDES = 5;
const SLIDE_DURATION = 8000; // Tiempo por pantalla: 8 segundos

let currentSlide = 0;
let progressInterval;
let startTime;

const track = document.getElementById('track');
const progressBar = document.getElementById('progress');

function updateSlide() {
  // Mover el carrusel
  track.style.transform = `translateX(-${currentSlide * 100}vw)`;
  
  // Reiniciar la barra de progreso
  clearInterval(progressInterval);
  progressBar.style.width = '0%';
  
  startTime = Date.now();
  
  progressInterval = setInterval(() => {
    const elapsedTime = Date.now() - startTime;
    const percentage = (elapsedTime / SLIDE_DURATION) * 100;
    
    if (percentage <= 100) {
      progressBar.style.width = `${percentage}%`;
    } else {
      clearInterval(progressInterval);
      nextSlide();
    }
  }, 100);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % TOTAL_SLIDES;
  updateSlide();
}

// Iniciar la rotación automática al cargar la página
window.onload = () => {
  updateSlide();
};
