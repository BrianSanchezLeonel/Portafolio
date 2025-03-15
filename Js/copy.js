function copiarTexto(texto) {
    navigator.clipboard.writeText(texto)
        .catch(err => console.error("Error al copiar:", err));
}