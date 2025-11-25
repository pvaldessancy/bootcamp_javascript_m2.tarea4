// Seleccionar el botón
const btnIrArriba = document.getElementById('btn-ir-arriba');

// Mostrar el botón cuando se baja un poco haciendo scroll
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnIrArriba.style.display = "block";
    } else {
        btnIrArriba.style.display = "none";
    }
};

// Función para volver arriba suavemente
function irArriba() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
