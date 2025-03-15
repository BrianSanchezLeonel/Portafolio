
document.addEventListener("DOMContentLoaded", function() {
    
    function cambiarTexto() {
        const h3 = document.getElementById("text");

        if (window.innerWidth < 850) {
            h3.textContent = "Estudiante de 7° en la EEST N°5";
        } else {
            h3.textContent = "Estudiante de 7° en la Escuela de Educación Secundaria Técnica N°5 “Amancio Williams”."; // Vuelve al texto original
        }
    }

    cambiarTexto();

    window.addEventListener("resize", cambiarTexto);
});