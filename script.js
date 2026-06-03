document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    console.log("JS Loaded");

    toggle.addEventListener("click", () => {
        console.log("Menu Clicked");
        navLinks.classList.toggle("active");
    });

});