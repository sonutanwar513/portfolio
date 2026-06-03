document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if(toggle && navLinks){

        toggle.addEventListener("click", function (e) {
            e.stopPropagation();
            navLinks.classList.toggle("active");
        });

        document.addEventListener("click", function (e) {
            if (
                !navLinks.contains(e.target) &&
                !toggle.contains(e.target)
            ) {
                navLinks.classList.remove("active");
            }
        });

        // Menu item click hone par menu close ho jaye
        document.querySelectorAll("#nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });

    }

});