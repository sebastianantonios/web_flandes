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

//tarifas

document.getElementById("calcular-precio").addEventListener("click", () => {
    const noches = parseInt(document.getElementById("noches").value, 10);
    const personas = parseInt(document.getElementById("personas").value, 10);
  
    let precioPorPersona = 0;
  
    // Lógica de precios
    if (personas >= 5 && personas <= 9) {
      if (noches === 1) {
        precioPorPersona = 36000;
      } else if (noches >= 2) {
        precioPorPersona = 34000;
      }
    } else if (personas >= 10 && personas <= 18 && noches >= 2) {
      precioPorPersona = 33000;
    }
  
    // Cálculo del total
    const total = noches * personas * precioPorPersona;
  
    // Mostrar el resultado
    const resultadoDiv = document.getElementById("resultado");
    if (precioPorPersona > 0) {
      resultadoDiv.innerHTML = `<p>El precio total para ${noches} noche(s) y ${personas} persona(s) es: <strong>$${total.toLocaleString('es-CO')}</strong></p>`;
    } else {
      resultadoDiv.innerHTML = `<p>No hay tarifas disponibles para la combinación seleccionada.</p>`;
    }
  });
  