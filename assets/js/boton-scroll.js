window.addEventListener("scroll", function() {
    var boton = document.querySelector(".boton-scroll-home");
    if (this.scrollY > 500) {
        boton.classList.remove("ocultar");
    } else {
        boton.classList.add("ocultar");
    }
});