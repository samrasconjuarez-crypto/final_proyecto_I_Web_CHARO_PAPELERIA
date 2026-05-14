// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {


    const slides = document.querySelectorAll(".slide"); // Selecciona todas las diapositivas
    const prevBtn = document.getElementById("prevSlide");
    const nextBtn = document.getElementById("nextSlide");
    const intervalTime = 5000; // Tiempo en milisegundos para el movimiento automático (5 seg)
    let currentSlide = 0;
    let slideInterval; 



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

    // (INTERACCIONES)

    // Eventos para los botones laterales
    prevBtn.addEventListener("click", function() {
        prevSlide();
        stopSlideInterval(); 
        startSlideInterval(); 
    });

    nextBtn.addEventListener("click", function() {
        nextSlide();
        stopSlideInterval(); 
        startSlideInterval();
    });

    // Eventos opcionales: Detener automático al pasar el ratón por encima del slider
    const sliderContainer = document.querySelector("#hero-slider");
    sliderContainer.addEventListener("mouseenter", stopSlideInterval);
    sliderContainer.addEventListener("mouseleave", startSlideInterval);

    // --- INICIALIZACIÓN ---
    startSlideInterval(); // Comienza el movimiento automático al cargar
});

// Productos simulados
const productos = [
    "Cuaderno profesional",
    "Lápiz HB",
    "Colores Prismacolor",
    "Mochila escolar",
    "Pegamento líquido",
    "Tijeras escolares",
    "Calculadora científica",
    "Marcadores permanentes",
    "Lonchera infantil",
    "Papel cascarón"
];

const input = document.getElementById("searchInput");
const resultsBox = document.getElementById("searchResults");

input.addEventListener("keyup", () => {
    const texto = input.value.toLowerCase();

    resultsBox.innerHTML = "";

    if (texto === "") {
        resultsBox.style.display = "none";
        return;
    }

    const resultados = productos.filter(producto =>
        producto.toLowerCase().includes(texto)
    );

    if (resultados.length > 0) {
        resultsBox.style.display = "block";

        resultados.forEach(producto => {
            const item = document.createElement("div");
            item.classList.add("search-item");
            item.textContent = producto;

            item.addEventListener("click", () => {
                input.value = producto;
                resultsBox.style.display = "none";
            });

            resultsBox.appendChild(item);
        });

    } else {
        resultsBox.style.display = "block";
        resultsBox.innerHTML = `
            <div class="search-item">
                No se encontraron resultados
            </div>
        `;
    }
});