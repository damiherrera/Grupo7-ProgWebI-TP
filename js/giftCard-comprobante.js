const fondo = document.getElementById("giftcard");
const dedicatoria = document.getElementById("dedicacion");
const monto =document.getElementById("monto");
const ubicacionMonto = document.getElementById("ubicacionMonto");
const destinatario = document.getElementById("destinatario");

const titular = document.getElementById("titular");
const codigoGiftcard = document.getElementById("codigoAleatorio");
const montoTexto = document.getElementById("montoTexto");
const destinatarioTexto = document.getElementById("destinatario-texto");
const fechaVisualizacion = document.getElementById("fecha");
const fechaActual = new Date().toLocaleDateString();
fechaVisualizacion.textContent = fechaActual;

document.addEventListener("DOMContentLoaded", function(){
    let montoGuardado = sessionStorage.getItem("montoTotal");
    let titularGuardado = sessionStorage.getItem("nombreTitular");
    let codigoGiftcardGuardado = sessionStorage.getItem("codigoMostrado");
    let destinatarioGuardado = sessionStorage.getItem("destinatario");
    let fondoGuardado = sessionStorage.getItem("fondo");
    let tamanioGuardado = sessionStorage.getItem("tamanioFuente");
    let colorGuardado = sessionStorage.getItem("colorFuente");
    let dedicadoColor = sessionStorage.getItem("colorDedicatoria");
    

    if(montoGuardado){
        montoTexto.textContent = montoGuardado;
        monto.textContent = montoGuardado;
    };
    if(titularGuardado){
        titular.textContent = titularGuardado;
    };
    if(codigoGiftcardGuardado){
        codigoGiftcard.textContent = codigoGiftcardGuardado;
    };
    if(destinatarioGuardado){
        destinatario.textContent = destinatarioGuardado;
        destinatarioTexto.textContent = destinatarioGuardado;
    };
    if(fondoGuardado){
        fondo.style.backgroundImage = fondoGuardado;
    }
    if(tamanioGuardado){
        destinatario.style.fontSize = tamanioGuardado;
    }
    if(colorGuardado){
        destinatario.style.color = colorGuardado;
    }
    if(dedicadoColor){
        dedicatoria.style.color = dedicadoColor;
    }
});

document.addEventListener("DOMContentLoaded", function(){
    let top = sessionStorage.getItem("top");
    let right = sessionStorage.getItem("right");
    let bottom = sessionStorage.getItem("bottom");
    let left = sessionStorage.getItem("left");

    if(top){
        ubicacionMonto.style.top = top;
    }
    if(right){
        ubicacionMonto.style.right = right;
    }
    if(bottom){
        ubicacionMonto.style.bottom = bottom;
    }
    if(left){
        ubicacionMonto.style.left = left;
    }
})

let volverInicio = document.querySelector(".volver-inicio");
let volverGiftcard = document.querySelector(".volver-giftcard");

volverInicio.addEventListener("click", function(event){
    event.preventDefault();
    sessionStorage.clear();

    window.location.href = "../index.html";
})
volverGiftcard.addEventListener("click", function(event){
    event.preventDefault();
    sessionStorage.clear();

    window.location.href = "../vistas/gift-card.html";
})