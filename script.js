// script.js

document.addEventListener('DOMContentLoaded', () => {
    const slideInElements = document.querySelectorAll('.slide-in-element');

    const checkVisibility = () => {
        slideInElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const viewportHeight = window.innerHeight;

            // Ajusta este umbral si quieres que los elementos aparezcan antes o después
            const shouldBeVisible = elementTop < viewportHeight * 0.95 && elementBottom > 0; // Se anima si cualquier parte está en el viewport

            if (shouldBeVisible) {
                // Añade la clase 'is-visible' con un pequeño retraso para escalonar si es necesario
                const delay = parseFloat(element.dataset.animationDelay || 0); // Obtener el retraso del data-attribute
                setTimeout(() => {
                    element.classList.add('is-visible');
                }, delay * 1000); // Convertir segundos a milisegundos

            } else {
                // Si el elemento sale de la vista, se quita la clase para que la animación se repita
                element.classList.remove('is-visible');
            }
        });
    };

    // Aplicar los estilos iniciales (opacidad y transform) antes de la primera comprobación
    // ESTA SECCIÓN ES LA QUE FALTA EN TU CÓDIGO ACTUAL Y ES CRUCIAL
    slideInElements.forEach(element => {
        // Asegúrate de que los elementos estén ocultos al cargar
        element.style.opacity = '0';
        const direction = element.dataset.animationDirection;
        if (direction === 'left') {
            element.style.transform = 'translateX(-100px)';
        } else if (direction === 'right') {
            element.style.transform = 'translateX(100px)';
        } else if (direction === 'up') { // Para las secciones que vienen de abajo
            element.style.transform = 'translateY(50px)';
        }
    });


    // Ejecutar al cargar la página y al hacer scroll
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Ejecutar al cargar para elementos ya visibles en el viewport inicial
});
