document.addEventListener("DOMContentLoaded", function() {
    const botonInicioSesion = document.getElementById("botonInicioSesion");
    const botonRegistro = document.getElementById("botonRegistro");
    const botonCerrarSesion = document.getElementById("botonCerrarSesion");
    const liBotenesResponsive = document.querySelectorAll(".li-botonMobile");
    const liBotonCerrarSesionResponsive = document.getElementById("liCerrarSesion"); // Se repite, asegurarse de que sea el correcto
    //console.log(document.getElementById("botonCerrarSesion"));
    // Función que actualiza el estado del usuario
    function actualizarEstadoUsuario() {
        const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuarioLogueado"));
        console.log("usuariologueado", usuarioLogueado);

        // Seleccionar todos los botones "Agregar al carrito"
        const botonesAgregarACarrito = document.querySelectorAll('.boton-comprar');
        const linkVerDetalle = document.querySelectorAll(".ver-detalle");

        linkVerDetalle.forEach(boton => {
            boton.addEventListener("click", function(event) {
                event.preventDefault();
                window.location.href = boton.getAttribute("href");
            });
        });

        botonesAgregarACarrito.forEach(boton => {
            boton.addEventListener("click", function(event) {
                event.preventDefault(); // Prevenir el comportamiento predeterminado

                if (usuarioLogueado) {
                    window.location.href = "./vistas/carrito.html"; // Redirigir al carrito
                } else {
                    window.location.href = "./vistas/registrarse.html"; // Redirigir a registro
                }
            });
        });

        if (usuarioLogueado) {
            // Si está logueado, ocultar los botones de inicio y registro, mostrar cerrar sesión (escritorio)
            if (botonInicioSesion) botonInicioSesion.style.display = "none";
            if (botonRegistro) botonRegistro.style.display = "none";
            if (botonCerrarSesion) botonCerrarSesion.style.display = 'flex';

            // Mostrar/ocultar botones para la versión responsive
            liBotenesResponsive.forEach(boton => {
                boton.style.display = 'none'; // Ocultar botones de inicio y registro responsive
            });
            if (liBotonCerrarSesionResponsive) liBotonCerrarSesionResponsive.style.display = 'flex'; // Mostrar cerrar sesión responsive
        } else {
            // Si no está logueado, mostrar los botones de inicio y registro, ocultar cerrar sesión
            if (botonInicioSesion) botonInicioSesion.style.display = "flex";
            if (botonRegistro) botonRegistro.style.display = "flex";
            if (botonCerrarSesion) botonCerrarSesion.style.display = 'none';

            // Mostrar/ocultar botones para la versión responsive
            liBotenesResponsive.forEach(boton => {
                boton.style.display = 'flex'; // Mostrar botones de inicio y registro responsive
            });
            if (liBotonCerrarSesionResponsive) liBotonCerrarSesionResponsive.style.display = 'none'; // Ocultar cerrar sesión responsive
        }
    }

    // Actualiza el estado de los botones cuando la página cargue
    actualizarEstadoUsuario();

    // Agregar el evento de clic para el botón de cerrar sesión
   
        botonCerrarSesion.addEventListener("click", function(event) {
            console.log("Clic en botón cerrar sesión desktop");
            sessionStorage.removeItem("usuarioLogueado");
            console.log("Sesión cerrada");
            window.location.reload(); // Recarga la página actual para que se actualice el estado de los botones.
             // Actualiza los botones después de cerrar sesión
        });
   

    // Lógica de evento para el botón de cierre de sesión responsive
  
        liBotonCerrarSesionResponsive.addEventListener("click", function(event) {
            console.log("Clic en botón cerrar sesión responsive");
            localStorage.removeItem("usuarioLogueado");
            console.log("Sesión cerrada");
            window.location.reload(); 
          // Actualiza los botones después de cerrar sesión
        });
  
});

//Carrusel
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slider = document.getElementById("slider");
const imagenes = document.querySelectorAll(".carrusel-item");

let operacion = 0;
let contador = 0;
let tamanioImagen = 100/imagenes.length;
function moverHaciaLaDerecha() {
    if(contador >= imagenes.length - 1){
        contador = 0; //Se reinicia el contador y me muestra la primera posicion
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        return;
    }
    contador++;
    operacion += tamanioImagen
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease.5s"
};

function moverHaciaLaIzquierda() {
    contador--;
    if(contador < 0){
        contador = imagenes.length - 1; //Me devuelve la ultima posicion
        operacion = tamanioImagen * (imagenes.length - 1); //Me devuelve la ultima posicion segun el tamaño del contenedor
        slider.style.transform = `translate(-${operacion}%)`;
        return;
    }
    operacion -= tamanioImagen;
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease.5s"
};

document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector(".slider-container");
    if(sliderContainer){
        setInterval (moverHaciaLaDerecha, 3000);
        arrowLeft.addEventListener("click", moverHaciaLaIzquierda);
        arrowRight.addEventListener("click", moverHaciaLaDerecha);
    }
})