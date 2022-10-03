//CONFIRMACION DE SALIDA DE LA PAGINA

window.addEventListener("beforeunload", (cierre) => {
    if (true) {
        cierre.preventDefault();
        cierre.returnValue = "";
        return "";
    }
});