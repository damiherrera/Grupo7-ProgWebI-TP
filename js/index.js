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