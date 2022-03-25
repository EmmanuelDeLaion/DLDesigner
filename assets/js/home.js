const tabcontenidos = document.querySelectorAll(".tab-content");
const tabLinks = document.querySelectorAll(".enlaces-tabs");

function abrirTab(event, tabNombre) {
    tabcontenidos.forEach((tabcontenido) => (tabcontenido.style.display = "none"));
    tabLinks.forEach((tabLink) => (tabLink.classList.remove("active")));
    event.currentTarget.classList.add("active");
    document.getElementById(tabNombre).style.display = "block";
}

console.log("este si carga");