document.addEventListener("DOMContentLoaded", function() {
    const usuarioLogueado = localStorage.getItem("userLoggedIn");
    const botonComprarGiftCard = document.getElementById("botonComprar-giftCard");
    const form = document.querySelector(".form__election"); // Selecciona el formulario

    botonComprarGiftCard.addEventListener("click", function(event) {
        // Prevenir el comportamiento por defecto del formulario
        event.preventDefault();

        // Verificar si el formulario es válido
        if (form.checkValidity()) {
            // Si el formulario es válido, redirigir según el estado de login
            if (usuarioLogueado) {
                // Si el usuario está logueado, redirigir a la página de pago de gift cards
                window.location.href = "../vistas/gift-card-pago.html";
            } else {
                // Si el usuario no está logueado, redirigir a la página de registro
                window.location.href = "../vistas/registrarse.html";
            }
        } else {
            // Si el formulario no es válido, mostrar los mensajes de error
            form.reportValidity(); // Esto mostrará los mensajes de error por defecto del navegador
        }
    });
});


const viewGift = document.querySelector(".creation .view .view__giftcard");

const inputFondo = document.getElementsByClassName("input-fondo");
//const fondos = document.getElementsByClassName("square");

const fondoImagen = Array.from(document.querySelectorAll('.fondo-label img')).map(img => img.src);
const inputFondoArray = Array.from(inputFondo);


//console.log("Fondo imágenes:", fondoImagen);

// Agregar el evento de clic a cada input
inputFondoArray.forEach(input => {
    input.addEventListener("click", function() {
        const clickedId = input.id; // Obtener el id del input clickeado
        
        // Obtener el índice del input clickeado
        const index = inputFondoArray.findIndex(i => i.id === clickedId);
        
        if (index !== -1) {
            const selectedImage = fondoImagen[index]; // Obtener la URL de la imagen correspondiente
            
            viewGift.style.backgroundImage = `url(${selectedImage})`;
        } else {
            console.error("Index not found for clicked ID:", clickedId);
        }
    });
});

//Cambia nombre instantaneamente
const destinatarioVisualizacion = document.getElementById("destinatario");
var destinatarioNombre = document.getElementById("name");

destinatarioNombre.addEventListener("input", function(){
    destinatarioVisualizacion.textContent = destinatarioNombre.value;  //El texto cambia segun el valor del input
});

//Cambia monto instantaneamente
const montoVisualizacion = document.getElementById("montoTexto"); 
var montoEstablecido = document.getElementById("price"); //El monto ingresado por el usuario

montoEstablecido.addEventListener("input", function(){
    montoVisualizacion.textContent = montoEstablecido.value;
});

//Cambiar el color de la fuente
const colores = document.querySelectorAll("input[name='color']"); //guardo todos los input de color

colores.forEach(function(colores){
    colores.addEventListener("click", cambiarColor); //Al hacer click se llama a la funcion
})

function cambiarColor(){
    let colorSeleccionado = document.querySelector("input[name='color']:checked").value;
    switch (colorSeleccionado){
        case "rojo":
            destinatarioVisualizacion.style.color = "#ff0000";
            break;
        case "morado":
            destinatarioVisualizacion.style.color = "#A435f0";
            break;
        case "azul":
            destinatarioVisualizacion.style.color = "#0000ff";
            break;  
        case "negro":
            destinatarioVisualizacion.style.color = "#000000";
            break;  
        case "blanco":
            destinatarioVisualizacion.style.color = "#ffffff";
            break;    
    }
};

//Cambia ubicacion del monto
const ubicaciones = document.querySelectorAll("input[name='ubicacion']");
var ubicacionVisualizacion = document.getElementById("ubicacionMonto");

ubicacionVisualizacion.style.top = "0";
ubicacionVisualizacion.style.right = "0";

ubicaciones.forEach(function(ubicaciones){
    ubicaciones.addEventListener("change", cambiarUbicacion);
});

function cambiarUbicacion(){
    let ubicacionSeleccionada = document.querySelector("input[name='ubicacion']:checked").value;

    ubicacionVisualizacion.style.left = null;
    ubicacionVisualizacion.style.right = null;
    ubicacionVisualizacion.style.top = null;
    ubicacionVisualizacion.style.bottom = null;

    switch(ubicacionSeleccionada){
        case "top-left":
            ubicacionVisualizacion.style.left = "0";
            ubicacionVisualizacion.style.top = "0";
            break; 
        case "top-right":
            ubicacionVisualizacion.style.top = "0";
            ubicacionVisualizacion.style.right = "0";
            break;
        case "bottom-left":
            ubicacionVisualizacion.style.bottom = "0";
            ubicacionVisualizacion.style.left = "0";
            break;
        case "bottom-right":
            ubicacionVisualizacion.style.bottom = "0";
            ubicacionVisualizacion.style.right = "0";
            break;
    }
};

//Cambia tamaño de fuente
const tamaños = document.querySelectorAll("input[name='size']");

tamaños.forEach(function(tamaños){
    tamaños.addEventListener("click", cambiarTamaño);
});

function cambiarTamaño(){
    let tamañoSeleccionado = document.querySelector("input[name='size']:checked").value;
    switch(tamañoSeleccionado){
        case "t20":
            destinatarioVisualizacion.style.fontSize = "1.25em";
            break;
        case "t28":
            destinatarioVisualizacion.style.fontSize = "1.75em";
            break;
        case "t32":
            destinatarioVisualizacion.style.fontSize = "2em";
            break;  
        case "t48":
            destinatarioVisualizacion.style.fontSize = "3em";
            break;
        case "t55":
            destinatarioVisualizacion.style.fontSize = "3.3em";
            break;       
    }
};

const fondos = document.querySelectorAll("input[name='fondo']");
var dedicatoria = document.getElementById("dedication");

fondos.forEach(function(fondos){
    fondos.addEventListener("click", cambiarColorDedicatoria);
})

function cambiarColorDedicatoria(){
    let fondoSeleccionado = document.querySelector("input[name='fondo']:checked").value;
    if(fondoSeleccionado == "fondo1"){
        dedicatoria.style.color = "#ffffff";
    } else{
        dedicatoria.style.color = "#000000";
    }
}


//Datos guardados en sessionStorge
const formulario = document.getElementById("formGiftcard");

formulario.addEventListener("submit", function(event){
    event.preventDefault()
    let color = destinatarioVisualizacion.style.color;
    let fondo = viewGift.style.backgroundImage;
    let tamanio = destinatarioVisualizacion.style.fontSize;
    let dedicatoriaColor = dedicatoria.style.color;
    let right = ubicacionVisualizacion.style.right;
    let left = ubicacionVisualizacion.style.left;
    let bottom = ubicacionVisualizacion.style.bottom;
    let top = ubicacionVisualizacion.style.top;

    sessionStorage.setItem("montoTotal", montoEstablecido.value);
    sessionStorage.setItem("destinatario", destinatarioNombre.value);
    sessionStorage.setItem("colorFuente", color);
    sessionStorage.setItem("fondo", fondo);
    sessionStorage.setItem("tamanioFuente", tamanio);
    sessionStorage.setItem("colorDedicatoria", dedicatoriaColor);
    sessionStorage.setItem("top", top);
    sessionStorage.setItem("right", right);
    sessionStorage.setItem("bottom", bottom);
    sessionStorage.setItem("left", left);

    window.location.href = "../vistas/gift-card-pago.html";
})