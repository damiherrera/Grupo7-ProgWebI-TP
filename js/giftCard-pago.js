//Traer el monto
const montoVisualizacion = document.getElementById("montoAbonar");
document.addEventListener("DOMContentLoaded", function(){
    let montoGuardado = sessionStorage.getItem("montoDescuento");
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

//Verificar formulario solo numeros
const numeroTarjeta = document.getElementById("card");
const numeroCVV = document.getElementById("cvv");

console.log(numeroCVV);
console.log(numeroTarjeta);

numeroTarjeta.addEventListener("keypress", function(event){
    this.value = this.value.replace(/[^0-9 ]/g, ''); //Acepta Espacios, cambia letras por cadena vacía
})
  
numeroCVV.addEventListener("keypress", function(event){
    this.value = this.value.replace(/[^0-9]/g, ''); //No acepta espacios, cambia letras y espacios por cadena vacía
})

const formularioPago = document.querySelector(".envio__form");
//El codigo solo se creará cuando toque confirmar

formularioPago.addEventListener("submit", function(event){
    event.preventDefault()
        let codigoGiftcard = generarCodigo(7);
        let montoDescuento = sessionStorage.getItem("montoDescuento");
        let codigosGenerados = JSON.parse(localStorage.getItem("codigoYMonto")) || []; //Si no encuentra ninguno crea array vacio

        let giftcardDatos = {
            codigo: codigoGiftcard,
            monto: montoDescuento
        };

        codigosGenerados.push(giftcardDatos); //Agrego al array

        sessionStorage.setItem("codigoMostrado", codigoGiftcard); //Se guarda momentaneamente para mostrarlo al usuario

        localStorage.setItem("codigoYMonto", JSON.stringify(codigosGenerados)); //Se guarda el array en el localStorage

        let nombreTitular = document.querySelector("input[name='nombre-titular']").value;
        sessionStorage.setItem("nombreTitular", nombreTitular);

    window.location.href = "../vistas/gift-card-comprobante.html"
})

