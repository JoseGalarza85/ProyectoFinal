// CONFIRMACION DE EDAD DEL USUARIO
do{
    edad = prompt("¿Que edad tenés?");
    if(edad == false) edad = 'n';
    if (!isNaN(edad)){
        if(edad >= 18) window.alert("¡Bienvenido!");
        else window.alert("Podés continuar, pero la reserva de la cancha solo se autoriza mayores de edad.");
    }
    else window.alert("Ingresá un valor numerico");
}while(isNaN(edad));

//CONFIRMACION DE SALIDA DE LA PAGINA

window.addEventListener("beforeunload", (cierre) => {
    if (true) {
        cierre.preventDefault();
        cierre.returnValue = "";
        return "";
    }
});