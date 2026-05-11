// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {

    // --- VARIABLES DEL SLIDER ---
    const slides = document.querySelectorAll(".slide"); // Selecciona todas las diapositivas
    const prevBtn = document.getElementById("prevSlide"); // Selecciona el botón 'anterior'
    const nextBtn = document.getElementById("nextSlide"); // Selecciona el botón 'siguiente'
    const intervalTime = 5000; // Tiempo en milisegundos para el movimiento automático (5 seg)
    let currentSlide = 0; // Índice de la diapositiva actual
    let slideInterval; // Variable para almacenar el temporizador

    // --- FUNCIONES DEL SLIDER ---

    // Muestra la diapositiva en el índice 'n'
    function showSlide(n) {
        // Oculta todas las diapositivas eliminando la clase 'active'
        slides.forEach(slide => slide.classList.remove("active"));
        
        // Ajusta el índice si se sale de los límites
        currentSlide = (n + slides.length) % slides.length;
        
        // Muestra la diapositiva actual añadiendo la clase 'active'
        slides[currentSlide].classList.add("active");
    }

    // Pasa a la siguiente diapositiva
    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }

    // Pasa a la diapositiva anterior
    function prevSlide() {
        currentSlide--;
        showSlide(currentSlide);
    }

    // Inicia el movimiento automático
    function startSlideInterval() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    // Detiene el movimiento automático
    function stopSlideInterval() {
        clearInterval(slideInterval);
    }

    // --- EVENT LISTENERS (INTERACCIONES) ---

    // Eventos para los botones laterales
    prevBtn.addEventListener("click", function() {
        prevSlide();
        stopSlideInterval(); // Detiene el automático cuando el usuario interactúa
        startSlideInterval(); // Lo reinicia para que empiece de nuevo la cuenta
    });

    nextBtn.addEventListener("click", function() {
        nextSlide();
        stopSlideInterval(); // Detiene el automático cuando el usuario interactúa
        startSlideInterval(); // Lo reinicia para que empiece de nuevo la cuenta
    });

    // Eventos opcionales: Detener automático al pasar el ratón por encima del slider
    const sliderContainer = document.querySelector("#hero-slider");
    sliderContainer.addEventListener("mouseenter", stopSlideInterval);
    sliderContainer.addEventListener("mouseleave", startSlideInterval);

    // --- INICIALIZACIÓN ---
    startSlideInterval(); // Comienza el movimiento automático al cargar
});