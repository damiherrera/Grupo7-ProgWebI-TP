let total = document.getElementById("total");
let montoAPagar = 60;
total.textContent = "$" + montoAPagar;
const btnAplicarDescuento = document.getElementById("aplicar-descuento");

let codigosYMontos = JSON.parse(localStorage.getItem("codigoYMonto")) || [];
const inputDescuento = document.getElementById("descuento"); 
let montoDescuento = 0;
let codigoABuscar = "";

descuento.addEventListener("change", function() {
    codigoABuscar = inputDescuento.value;
    let existe = false; // Variable para controlar si el código fue encontrado
    montoDescuento = 0;

    for (let i = 0; i < codigosYMontos.length; i++) {
        if (codigosYMontos[i].codigo === codigoABuscar) {
            existe = true; // Se encontró el código
            montoDescuento = codigosYMontos[i].monto;
            break;
        }
    }
    if (existe) {
        btnAplicarDescuento.style.display = "block";
    } else {
        alert("El código ingresado no existe o ya fue utilizado");
        btnAplicarDescuento.style.display = "none";
    }
})

btnAplicarDescuento.addEventListener("click",function(event){
    event.preventDefault();
    if(montoDescuento > montoAPagar){
        let confirmar = confirm("El descuento supera el importe a pagar. Si desea continuar, el total a pagar será de $0 y perderá el resto de su descuento. \n¿Desea continuar de todas formas?");
        if (confirmar) {
            montoAPagar = 0; // Establecemos el monto a pagar a 0
        }
        else{
            return;
        }
    }
    else{
        montoAPagar -= montoDescuento;
    }
    total.textContent = "$" + montoAPagar;

    codigosYMontos = codigosYMontos.filter(function(item) { // Se elimina el objeto usado del array
    return item.codigo !== codigoABuscar;
    });

localStorage.setItem("codigoYMonto", JSON.stringify(codigosYMontos)); // Guardar el array actualizado en localStorage

btnAplicarDescuento.style.display = "none"; // Ocultar el botón después de aplicar el descuento
inputDescuento.value = ""; // Limpiar el campo de entrada
montoDescuento = 0;
})

const formulario = document.getElementById("form");

formulario.addEventListener("submit", function(){
    window.location.href = "./vistas/confirma-compra.html";
})