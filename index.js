document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.header__button--toggle');
    const nav = document.querySelector('.header__nav');

    // Oculta el nav cuando se carga la página
    nav.style.display = 'none';

    // Verifica si el dispositivo es un escritorio
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

    if (isDesktop) {
        // Si es un escritorio, muestra el menú y oculta el botón
        nav.style.display = 'block';
        button.style.display = 'none';
    } else {
        // Si no es un escritorio, agrega un controlador de eventos de clic al botón
        button.addEventListener('click', function() {
            if (nav.style.display === 'none') {
                nav.style.display = 'block';
            } else {
                nav.style.display = 'none';
            }
        });
    }
});