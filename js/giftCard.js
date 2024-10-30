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