document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const cartBtn = document.getElementById("cart-btn");
    const navbar = document.querySelector(".navbar");
    const cartMenu = document.querySelector(".cart-items-container");

    menuBtn.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });

    cartBtn.addEventListener("click", function() {
        cartMenu.classList.toggle("active");
    });

    // Cerrar el menú al hacer clic en un enlace en dispositivos móviles
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            if (window.innerWidth <= 991) {
                navbar.classList.remove("active");
            }
        });
    });
});
