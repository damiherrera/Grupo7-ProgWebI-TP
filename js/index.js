const botonInicioSesion = document.getElementById("botonInicioSesion");
const botonRegistro = document.getElementById("botonRegistro");
const botonCerrarSesion = document.getElementById("botonCerrarSesion");
const liBotenesResponsive = document.querySelectorAll(".li-botonMobile");
const liBotonCerrarSesion = document.getElementById("liCerrarSesion");
const liBotonCerrarSesionResponsive = document.getElementById("liCerrarSesion"); // Se repite, asegurarse de que sea el correcto

// Función que actualiza el estado del usuario
function actualizarEstadoUsuario() {
    const usuarioLogueado = localStorage.getItem("userLoggedIn");
    
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
        // Si está logueado, ocultar botones de inicio y registro, mostrar cerrar sesión (escritorio)
        if (botonInicioSesion) botonInicioSesion.style.display = "none";
        if (botonRegistro) botonRegistro.style.display = "none";
        if (botonCerrarSesion) botonCerrarSesion.style.display = 'flex';

        // Mostrar/ocultar botones para la versión responsive
        liBotenesResponsive.forEach(boton => {
            boton.style.display = 'none'; // Ocultar botones de inicio y registro responsive
        });
        if (liBotonCerrarSesionResponsive) liBotonCerrarSesionResponsive.style.display = 'flex'; // Mostrar cerrar sesión responsive
    } else {
        // Si no está logueado, mostrar botones de inicio y registro, ocultar cerrar sesión
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

botonCerrarSesion.addEventListener("click", function(event){
    localStorage.removeItem("userLoggedIn");
    actualizarEstadoUsuario();
});

// Llamar a la función para establecer el estado al cargar la página
actualizarEstadoUsuario();

//Carrusel
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slider = document.getElementById("slider");
const imagenes = document.querySelectorAll(".carrusel-item");

setInterval (moverHaciaLaDerecha, 3000);

arrowRight.addEventListener("click", moverHaciaLaDerecha);
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
arrowLeft.addEventListener("click", moverHaciaLaIzquierda);
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