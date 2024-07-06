document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    // Función para alternar la visibilidad del menú
    function toggleMenu() {
        navLinks.classList.toggle("active");
        const expanded = navLinks.classList.contains("active");
        menuBtn.setAttribute("aria-expanded", expanded);
        navLinks.setAttribute("aria-hidden", !expanded);
    }

    // Evento clic en el botón de menú
    menuBtn.addEventListener("click", function() {
        toggleMenu();
    });

    // Evento clic fuera del menú desplegable para cerrarlo
    document.addEventListener("click", function(event) {
        if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
            navLinks.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
        }
    });

    // Mejora de accesibilidad: cerrar menú al presionar Esc
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && navLinks.classList.contains("active")) {
            toggleMenu();
        }
    });
});