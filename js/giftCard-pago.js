//Traer el monto
const montoVisualizacion = document.getElementById("montoAbonar");
document.addEventListener("DOMContentLoaded", function(){
    let montoGuardado = sessionStorage.getItem("montoTotal");
    if(montoGuardado){
        montoVisualizacion.textContent = montoGuardado;
    };
});

//Generar código
function generarCodigo (longitud){
    const caracteres = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let codigo = "";
    for (let i = 0; i < longitud; i++) {
        let aleatorio = Math.floor(Math.random() * caracteres.length); //El floor redondea hacia abajo para que no de con coma
        codigo += caracteres.charAt(aleatorio);
    }
    return codigo;
}

const formularioPago = document.querySelector(".envio__form");
//El codigo solo se creará cuando toque confirmar

formularioPago.addEventListener("submit", function(event){
    event.preventDefault()
        let codigoGiftcard = generarCodigo(7);
        let codigosGenerados = JSON.parse(localStorage.getItem("codigo")) || []; //Si no encuentra ninguno crea array vacio

        codigosGenerados.push(codigoGiftcard);
        sessionStorage.setItem("codigoMostrado", codigoGiftcard);
        localStorage.setItem("codigo", JSON.stringify(codigosGenerados));
        let nombreTitular = document.querySelector("input[name='nombre-titular']").value;
        sessionStorage.setItem("nombreTitular", nombreTitular);

    window.location.href = "../vistas/gift-card-comprobante.html"
})