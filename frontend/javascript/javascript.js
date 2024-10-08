//menu-desplegable_mobile
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
mobileMenu.classList.toggle('open');

});


let currentSlide = 0;
const images = document.querySelectorAll('.image-container img');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Mostrar la diapositiva actual
function showSlide(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            img.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

// Función diapositiva siguiente
function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
}

// Función diapositiva anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    showSlide(currentSlide);
}

// Puntos de navegacion 
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Eventos de navegación
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// retorna la primera imagen
showSlide(currentSlide);

//transicion de informacion

document.addEventListener("DOMContentLoaded", function() {
    let textContainer = document.querySelector(".description_web");
    let text = textContainer.textContent.trim();
    let index = 0;
    let textColor = window.getComputedStyle(textContainer).color;

    textContainer.textContent = "";

    function addLetter() {
        textContainer.innerHTML += '<span style="color:' + textColor + '">' + text[index++] + '</span>';
        if (index < text.length) {
            setTimeout(addLetter, 70); //velocidad
        }
    }

    addLetter();
});