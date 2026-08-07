let currentIndex = 0;
const totalSlides = 5;

// Mueve el carrusel de Derecha a Izquierda
function goToSlide(index) {
  const track = document.getElementById('track');
  const buttons = document.querySelectorAll('.nav-btn');
  
  currentIndex = index;
  
  // Desplazamiento horizontal continuo hacia la izquierda
  track.style.transform = `translateX(-${index * 100}%)`;
  
  // Actualizar botones de la barra de navegación
  buttons.forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
}

// Rotación automática continua tipo presentación (cambia cada 7 segundos)
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  goToSlide(currentIndex);
}, 7000);

// Reloj en vivo
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('es-UY');
  document.getElementById('live-clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();
