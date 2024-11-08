document.addEventListener("DOMContentLoaded", function() {
    const botonInicioSesion = document.getElementById("botonInicioSesion");
    const botonRegistro = document.getElementById("botonRegistro");
    const botonCerrarSesion = document.getElementById("botonCerrarSesion");
  
    const liBotenesResponsive = document.querySelectorAll(".li-botonMobile");
   

    const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    const perfilButton = document.getElementById("buton-profile");
    const action_buttons =  document.getElementsByClassName("action-buttons")[0];
 

    //botones para cerrar y eliminar 
    const botonCerrarSesionResp = document.getElementById("cerrarSesion-resp");
    const botonEliminarUsuarioResp = document.getElementById("eliminar-resp");

    //console.log(document.getElementById("botonCerrarSesion"));
    // Función que actualiza el estado del usuario
    function actualizarEstadoUsuario() {
        
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
            if(botonEliminarUsuarioResp) botonEliminarUsuarioResp.style.display ="block";
            // Mostrar/ocultar botones para la versión responsive
            liBotenesResponsive.forEach(boton => {
                boton.style.display = 'none'; // Ocultar botones de inicio y registro responsive
            });
            //if (liBotonCerrarSesionResponsive) liBotonCerrarSesionResponsive.style.display = 'flex'; // Mostrar cerrar sesión responsive
            
        
            
           
             perfilButton.style.display = "block" ;
       
       
    
       const opcionCerrar = document.getElementById ("cerrarSesionSubmenu")
       const opcionEliminar = document.getElementById("eliminarUserSubmenu")
       const subMenu = document.getElementById("sub-menu");

   action_buttons.style.position ="relative"
        
      // Función para cerrar sesión
opcionCerrar.addEventListener("click", () => {
    cerrarSesion();
});

// Función para eliminar usuario
opcionEliminar.addEventListener("click", () => {
    eliminarUsuario();
});

// Mostrar submenú al pasar el ratón por encima del perfil
perfilButton.addEventListener("mouseenter", () => {
    subMenu.style.display = "block"; // Mostrar submenú
});

// Ocultar submenú cuando el ratón sale del área del submenú
subMenu.addEventListener("mouseleave", () => {
    subMenu.style.display = "none"; // Ocultar submenú
});

// Alternar visibilidad del submenú cuando se haga clic en el botón de perfil
perfilButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevenir que el clic se propague al document
    if (subMenu.style.display === "block") {
        subMenu.style.display = "none"; // Ocultar submenú si está visible
    } else {
        subMenu.style.display = "block"; // Mostrar submenú si está oculto
    }
});

// Cerrar el submenú si se hace clic fuera de él o del perfilButton
document.addEventListener("click", (e) => {
    if (!action_buttons.contains(e.target) && !perfilButton.contains(e.target)) {
        subMenu.style.display = "none"; // Ocultar el submenú
    }
});

    //const actionButtonsMobile = document.querySelector(".action-buttons--mobile");
/*EVENTOS A LOS BOTONES RESPONSIVE ELIMINAR Y CERRAR SESION*/
      if(botonEliminarUsuarioResp){
        botonEliminarUsuarioResp.addEventListener("click", (event)=>{
            event.preventDefault();
            eliminarUsuario();

        })
       }
        
     
     
        if(botonCerrarSesionResp) {
            botonCerrarSesionResp.addEventListener("click", (event)=>{
                event.preventDefault();  // 
                cerrarSesion();
              
       
            })
        }
       
    /* FIN EVENTOS A LOS BOTONES RESPONSIVE ELIMINAR Y CERRAR SESION*/
      
   



        } else {
            // Si no está logueado, mostrar los botones de inicio y registro, ocultar cerrar sesión , eliminar y perfil
             botonInicioSesion.style.display = "flex";
             botonRegistro.style.display = "flex";
             botonCerrarSesionResp.style.display = 'none';
             botonEliminarUsuarioResp.style.display = "none";
             perfilButton.style.display = "none"
            // Mostrar/ocultar botones para la versión responsive
            liBotenesResponsive.forEach(boton => {
                boton.style.display = 'flex'; // Mostrar botones de inicio y registro responsive
            }); // Ocultar cerrar sesión responsive
           
        }
    }

    // Actualiza el estado de los botones cuando la página cargue
    actualizarEstadoUsuario();

    
        //function para cerrar sesion
        function cerrarSesion() {
            localStorage.removeItem("usuarioLogueado");
            window.location.reload();
            
        }

        //function eliminar usuario del todo
        function eliminarUsuario() {
    
            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
        
            // Obtengo el nombre del usuario logueado desde sessionStorage
            const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
        
            if (usuarioLogueado) {
                // Eliminar el usuario logueado del objeto de usuarios
                const nombreUsuario = usuarioLogueado.nombre;
        
                // Comprobar si el usuario existe en el objeto
                if (usuarios[nombreUsuario]) {
                    delete usuarios[nombreUsuario];  // Eliminar el usuario usando su nombre
        
                    // Guardar el objeto de usuarios actualizado en localStorage
                    localStorage.setItem("usuarios", JSON.stringify(usuarios));
        
                    // Eliminar el usuario logueado de sessionStorage
                    localStorage.removeItem("usuarioLogueado");
                    console.log("Usuario eliminado:", nombreUsuario);
                } else {
                    console.log("El usuario no existe.");
                }
            }
        
            // Recargar la página para reflejar los cambios
            window.location.reload();
         

        }
        

      


    

  
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



//crear mi perfil en nav, con sesion  iniciada





      
   


       


