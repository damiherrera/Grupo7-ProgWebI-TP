const botonInicioSesion = document.getElementById("botonInicioSesion");
const botonRegistro = document.getElementById("botonRegistro");
const botonCerrarSesion = document.getElementById("botonCerrarSesion");
const liBotenesResponsive = document.querySelectorAll(".li-botonMobile");
const liBotonCerrarSesion = document.getElementById("liCerrarSesion");
const linkVerDetalle = document.querySelectorAll(".ver-detalle");

// Función que actualiza el estado del usuario
function actualizarEstadoUsuario() {
    const usuarioLogueado = localStorage.getItem("userLoggedIn");
    
    // Seleccionar todos los botones "Agregar al carrito"
    const botonesAgregarACarrito = document.querySelectorAll('.boton-comprar');
   
    botonesAgregarACarrito.forEach(boton => {
        boton.addEventListener("click", function(event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado

            if (usuarioLogueado) {
                // Si está logueado, redirigir al carrito
               // Obtener el href del <a> que contiene el botón
                window.location.href = "./vistas/carrito.html"; // Redirigir a la URL del <a>
            } else {
                // Si no está logueado, redirigir a la página de registro
                window.location.href = "./vistas/registrarse.html"; // Redirigir a registro
            }
        });
    });

    if (usuarioLogueado) {
        // Si está logueado
        botonInicioSesion.style.display = "none";
        botonRegistro.style.display = "none";
        botonCerrarSesion.style.display = 'flex';
        liBotenesResponsive.forEach(boton=>{
            boton.style.display = 'none';
        });
        
    } else {
        // Si no está logueado, mantener visibles los botones de inicio de sesión y registro
        botonInicioSesion.style.display = "flex";
        botonRegistro.style.display = "flex";
        liBotonCerrarSesion.style.display = 'none';
        linkVerDetalle.forEach(link=>{
            link.addEventListener("click", function(){
                window.location.href = '../vistas/registrarse.html'
            })
        })
        


    }
}

botonCerrarSesion.addEventListener("click", function(event){
    localStorage.removeItem("userLoggedIn");
    actualizarEstadoUsuario();
});

// Llamar a la función para establecer el estado al cargar la página
actualizarEstadoUsuario();